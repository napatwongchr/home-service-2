import { pool } from "../utils/db.js";
import { cloudinaryDelete, cloudinaryUpload } from "../utils/upload.js";

const serviceListController = {
    async createServiceList(req, res) {
        try {

            const serviceList = {
                serviceName: req.body.serviceName,
                serviceCategory: req.body.serviceCategory,
                subService: req.body.serviceList
            }

            const imageUrl = await cloudinaryUpload(req.file);
            serviceList['serviceImage'] = imageUrl

            const serviceName = serviceList.serviceName
            const serviceCategory = serviceList.serviceCategory
            const image = serviceList.serviceImage

            //Add Image
            const addImage = await pool.query(`insert into service_image(public_id, url, bytes)
                values($1, $2, $3) returning service_image_id
            `, [image[0].publicId, image[0].url, image[0].bytes])

            const imageId = addImage.rows[0].service_image_id

            //Get Category ID
            const findServiceCategory = await pool.query(`select service_category_id from service_category where service_category_name = $1`, [serviceCategory])
            const serviceCategoryId = findServiceCategory.rows[0]["service_category_id"]

            //Add Service
            const addService = await pool.query(`insert into service(service_category_id, service_image_id, service_name, created_at, updated_at)
            values (
                $1, $2, $3, 
                $4,
                $5
                ) returning service_id`,
                [serviceCategoryId, imageId, serviceName, new Date(), new Date()])

            //Get Service ID
            const serviceId = addService.rows[0].service_id

            // Add Sub Service
            const subService = JSON.parse(serviceList.subService)
            subService.map(async subService => {
                await pool.query(`insert into sub_service(service_id, sub_service_name, unit_name, price_per_unit, created_at, updated_at )
                    values($1, $2, $3, $4,
                            $5,
                            $6
                        ) returning sub_service_id
                `, [serviceId, subService.name, subService.unit, subService.price, new Date(), new Date()])
            })

            return res.json({
                msg: "service has been created"
            })


        } catch (err) {
            console.log(err)
            return res.status(400).json({
                msg: "invalid input"
            })
        }
    },

    async getService(req, res) {
        try {
            const serviceId = req.query.serviceId
            const serviceName = req.query.serviceName

            const serviceQuery = `select service_id, 
            service_name,  
            service_category_name, 
            service_image.url,
            service_image.bytes,
            service.created_at, 
            service.updated_at 
            from service
            inner join service_image
            on service_image.service_image_id = service.service_image_id
            inner join service_category
            on service_category.service_category_id = service.service_category_id`

            const subServiceQueryByServiceId = `select sub_service_id, 
            sub_service_name, 
            unit_name, price_per_unit, 
            created_at, 
            updated_at 
            from sub_service where service_id = $1`

            //Get Service By ID
            if (serviceId) {

                let findService = await pool.query(`${serviceQuery} where service_id = $1`, [serviceId])
                let findSubService = await pool.query(subServiceQueryByServiceId, [serviceId])

                if (!findService.rows[0]) {
                    return res.status(404).json({
                        msg: "service not found"
                    })
                }

                //Set response format for Get service by Id
                const service = findService.rows[0]
                service.created_at = service.created_at.toLocaleString().split(', ').join(' ')
                service.updated_at = service.updated_at.toLocaleString().split(', ').join(' ')

                return res.status(200).json({
                    data: {
                        service: findService.rows[0],
                        subService: findSubService.rows
                    }
                })
            }

            //Get Service By Name
            else if (serviceName) {
                let findService = await pool.query(`${serviceQuery} where service_name like $1`, [serviceName + '%'])

                if (!findService.rows[0]) {
                    return res.status(404).json({
                        msg: "service not found"
                    })
                }

                //Set response format for service by name
                const serviceByName = findService.rows.map(service => {
                    service.created_at = service.created_at.toLocaleString().split(', ').join(' ')
                    service.updated_at = service.updated_at.toLocaleString().split(', ').join(' ')
                    return service
                })

                return res.status(200).json({
                    data : serviceByName
                })
            } else if (Object.keys(req.query).length > 0) {
                return res.status(400).json({
                    msg: "invalid query input"
                })
            }

            // Get All Service
            const findService = await pool.query(serviceQuery)
            
            //Set response format for all service
            const service = findService.rows.map(service => {
                service.created_at = service.created_at.toLocaleString().split(', ').join(' ')
                service.updated_at = service.updated_at.toLocaleString().split(', ').join(' ')
                return service;
            })
            return res.status(200).json({
                data: service
            })

        } catch (err) {
            console.log(err);
            return res.status(400).json({
                msg: "invalid input"
            })
        }
    },

    async updateService(req, res) {
        try {
            // prepare  data before update
            const serviceId = req.query.serviceId
            const serviceList = {
                serviceName: req.body.serviceName,
                serviceCategory: req.body.serviceCategory,
                serviceSubList: req.body.serviceList
            }
            const subServiceList = JSON.parse(serviceList.serviceSubList)
            const oldSubServices = subServiceList.filter(item => item.sub_service_id)
            const newSubServices = subServiceList.filter(item => !item.sub_service_id)

            // update data to service table
            const findServiceCategory = await pool.query(`select service_category_id from service_category where service_category_name = $1`, [serviceList.serviceCategory])
            const updateService = await pool.query(`update service 
            set service_name = $1, 
            updated_at = $2, 
            service_category_id = $3
            where service_id = $4 returning *`, [serviceList.serviceName,new Date(), findServiceCategory.rows[0].service_category_id, serviceId])

            //  get sub service id from database
            const oldSubServiceDB = await pool.query(`select sub_service_id 
                  from sub_service 
                  where service_id = $1`
                , [serviceId])
            const oldSubServiceDBArr = oldSubServiceDB.rows.map(item => item.sub_service_id);

            // update  old sub service data
            const updateOldServices = oldSubServices.filter(item => oldSubServiceDBArr.indexOf(item.sub_service_id) !== -1)

            updateOldServices.map(async subService => {
                await pool.query(`update sub_service 
                set sub_service_name = $1, 
                unit_name = $2, price_per_unit = $3, 
                updated_at = $4
                where sub_service_id = $5
                `, [subService.sub_service_name, subService.unit_name, subService.price_per_unit,new Date(), subService.sub_service_id])
            })

            //  delete old service if not exist
            const userOldSubServiceArr = subServiceList.map(item => item.sub_service_id);
            const deleteOldServices = oldSubServiceDBArr.filter(item => userOldSubServiceArr.indexOf(item) === -1)

            deleteOldServices.map(async subService => {
                await pool.query(`delete from sub_service where sub_service_id = $1`, [subService])
            })

            // insert new service to database
            newSubServices.map(async subService => {
                await pool.query(`insert into sub_service(service_id, sub_service_name, unit_name, price_per_unit, created_at, updated_at )
                    values($1, $2, $3, $4,
                            $5,
                            $6
                        )
                `, [serviceId, subService.sub_service_name, subService.price_per_unit, subService.unit_name, new Date(), new Date()])
            })


            if (typeof req.body.serviceImage === 'string') {
                serviceList['serviceImage'] = req.body.serviceImage
            } else {
                const idOldImage = await pool.query(`select service_image_id 
                  from service 
                  where service_id = $1`
                    , [serviceId])

                const publicIdOldImage = await pool.query(`select public_id 
                  from service_image 
                  where service_image_id = $1`
                    , [idOldImage.rows[0].service_image_id])

                // delete image from cloundinary and delete from by id
                const result = await cloudinaryDelete(publicIdOldImage.rows[0].public_id);

                // upload new image to cloundinary
                const serviceUrl = await cloudinaryUpload(req.file);

                serviceList['publicId'] = serviceUrl[0].publicId
                serviceList['url'] = serviceUrl[0].url
                serviceList['bytes'] = serviceUrl[0].bytes

                const updateImageTable = await pool.query(`update service_image set public_id = $1, url = $2, bytes = $3 where service_image_id = $4 RETURNING *`, [serviceList.publicId, serviceList.url, serviceList.bytes, idOldImage.rows[0].service_image_id])
            }

            return res.json({
                msg: "updated complete"
            })
        }
        catch (err) {
            console.log(err)
            return res.status(400).json({
                msg: "something wrong"
            })
        }
    },

    async deleteService(req, res) {
        try {
            const serviceId = req.query.serviceId;
            const deleteService = await pool.query(`delete from service where service_id = $1 returning service_image_id`, [serviceId])
            const deleteSubService = await pool.query(`delete from sub_service where service_id = $1`, [serviceId])
            const deleteImageFromDB = await pool.query(`delete from service_image where service_image_id = $1 returning public_id`, [deleteService.rows[0].service_image_id])
            const deleteImageFromCloud = await cloudinaryDelete(deleteImageFromDB.rows[0].public_id)

            return res.status(200).json({
                msg: "service has been deleted"
            })
        } catch (err) {
            return res.status(400).json({
                msg: "something wrong"
            })
        }
    }
}

export default serviceListController;