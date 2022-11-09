import serviceRoute from "../routers/service.route.js";
import { pool } from "../utils/db.js";
import { cloudinaryUpload } from "../utils/upload.js";
import { v2 as cloudinary } from "cloudinary";
const serviceListController = {
    async createServiceList(req, res) {
        try {
            const serviceList = {
                serviceName: req.body.serviceName,
                serviceCategory: req.body.serviceCategory,
                serviceSubList: req.body.serviceList
            }


            const serviceUrl = await cloudinaryUpload(req.file);
            serviceList['serviceImage'] = serviceUrl


            // const serviceImageUrl = serviceList.serviceImage[0].url
            const serviceName = serviceList.serviceName
            const serviceCategory = serviceList.serviceCategory

            //Add Image to service_image table
            const addImage = await pool.query(`insert into service_image(public_id, url, bytes)
                values($1, $2, $3) returning service_image_id
            `, [serviceUrl[0].publicId, serviceUrl[0].url, serviceUrl[0].bytes])

            const recentImageId = addImage.rows[0].service_image_id

            //Get service category id
            const findServiceCategory = await pool.query(`select service_category_id from service_category where service_category_name = $1`, [serviceCategory])
            const serviceCategoryId = findServiceCategory.rows[0]["service_category_id"]

            const addService = await pool.query(`insert into service(service_category_id, service_image_id, service_name, created_at, updated_at)
                values (
                    $1, $2, $3, 
                    to_char(current_timestamp, 'DD/MM/YYYY HH:MI AM'), 
                    to_char(current_timestamp, 'DD/MM/YYYY HH:MI AM') 
                    ) returning service_id
            `, [serviceCategoryId, recentImageId, serviceName])

            const recentServiceId = addService.rows[0]["service_id"]


            // Add to subService table
            const subServiceListObject = JSON.parse(serviceList.serviceSubList)
            subServiceListObject.map(async subService => {
                await pool.query(`insert into sub_service(service_id, sub_service_name, unit_name, price_per_unit, created_at, updated_at )
                    values($1, $2, $3, $4,
                            to_char(current_timestamp, 'DD/MM/YYYY HH:MI AM'),
                            to_char(current_timestamp, 'DD/MM/YYYY HH:MI AM')
                        )
                `, [recentServiceId, subService.name, subService.unit, subService.price])
            })

            return res.json({
                msg: "service has been created"
            })



        } catch (err) {
            return res.status(400).json({
                msg: "invalid input"
            })
        }
    },
    async getService(req, res) {
        try {
            //Get By ID
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
            on service_category.service_category_id = service.service_category_id
            `
            const subServiceQueryById = `select sub_service_id, 
            sub_service_name, 
            unit_name, price_per_unit, 
            created_at, 
            updated_at 
            from sub_service where service_id = $1`

            //Qeury Service By ID
            if (serviceId) {

                let findService = await pool.query(`${serviceQuery} where service_id = $1`, [serviceId])
                let findSubService = await pool.query(subServiceQueryById, [serviceId])

                if (!findService.rows[0]) {
                    return res.status(404).json({
                        msg: "service not found"
                    })
                }
                return res.status(200).json({
                    data: {
                        service: findService.rows[0],
                        subService: findSubService.rows
                    }
                })
                //Query Service By Name
            } else if (serviceName) {
                let findService = await pool.query(`${serviceQuery} where service_name like $1`, [serviceName + '%'])

                if (!findService.rows[0]) {
                    return res.status(404).json({
                        msg: "service not found"
                    })
                }
            } else if (Object.keys(req.query).length > 0) {
                return res.status(400).json({
                    msg: "invalid query input"
                })
            }

            //Get All Service
            const findService = await pool.query(serviceQuery)
            return res.status(200).json({
                data: findService.rows
            })
        } catch (err) {
            return res.status(400).json({
                msg: "invalid input"
<<<<<<< HEAD
            })
        }
    },

    async updateService(req, res) {
        try {
            const serviceId = req.query.serviceId
            // const subServiceList = JSON.parse(req.body.serviceList)
            const newSubServiceList = req.body.serviceList

            // const imageUrl = findServiceImageUrl.rows[0]
            // await cloudinaryDestroy(public_id)

            //Find service category id
            const findServiceCategory = await pool.query(`select service_category_id from service_category where service_category_name = $1`, [req.body.serviceCategory])
            const serviceCategoryId = findServiceCategory.rows[0].service_category_id

            //Update Service Table
            //Non image change
            if (!Boolean(req.file)) {
                // await pool.query(`update service
                //     set service_category_id = $1,
                //     service_name = $2,
                //     updated_at = to_char(current_timestamp, 'DD/MM/YYYY HH:MI AM')
                //     where service_id = $3
                // `, [serviceCategoryId, req.body.serviceName, serviceId])

                //compare old sub service : new sub service
                // const oldSubService = await pool.query(`select sub_service_id 
                // from sub_service 
                // where service_id = $1`
                //     , [req.query.serviceId])

                // const oldSubServiceArray = oldSubService.rows
                // const newSubServiceArray = newSubServiceList

                // newSubServiceArray.map((newSub, index) => {
                //     console.log(newSub)
                //     console.log(oldSubService.rows)
                // })



                return res.json({
                    msg: "updated complete"
                })

            }


            return res.status(200).json({
                data: "image removed"
            })

        } catch (err) {
            console.log(err)
            return res.status(400).json({
                msg: "something wrong"
=======
>>>>>>> 3cc2299 (feat: updated edit service)
            })
        }
    }
}

export default serviceListController;