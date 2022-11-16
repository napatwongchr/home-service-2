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
            //Get By ID
            const serviceId = req.query.serviceId
            const serviceName = req.query.searchInput
            const category = req.query.category;
            const priceMin = req.query.min;
            const priceMax = req.query.max;
            const sort = req.query.sort

            let serviceQuery = `
            select service.service_id,
            service.service_name,
            service_image.url,
            service.service_category_id,
            service_category.service_category_name,
            service_image.service_image_id,
            service_image.bytes,
            service.created_at,
            service.updated_at,
            MIN(sub_service.price_per_unit), 
            MAX(sub_service.price_per_unit)
            from service
            inner join service_image
            on service_image.service_image_id = service.service_image_id
            inner join service_category
            on service_category.service_category_id = service.service_category_id
            inner join sub_service
            on sub_service.service_id = service.service_id
            `

            const subServiceQuery = `select *
            from sub_service
            order by price_per_unit asc
            `

            const subServiceQueryByServiceId = `select sub_service_id, 
            sub_service_name, 
            unit_name, price_per_unit, 
            created_at, 
            updated_at 
            from sub_service where service_id = $1`

            const groupBy = `group by service.service_id, service_image.service_image_id, service_category.service_category_name`

            //Query Service By ID
            if (serviceId) {
                let findService = await pool.query(`
                    ${serviceQuery}
                    where service.service_id = $1
                    ${groupBy}
                `
                    , [serviceId])

                let findSubService = await pool.query(`
                ${subServiceQueryByServiceId}
                `, [serviceId])

                if (!findService.rows[0]) {
                    return res.status(404).json({
                        msg: "service not found"
                    })
                }

                //Set response format for Get service by Id
                findService.rows[0].created_at = findService.rows[0].created_at.toLocaleString().split(', ').join(' ')
                findService.rows[0].updated_at = findService.rows[0].updated_at.toLocaleString().split(', ').join(' ')
                const subServiceById = findSubService.rows.map(subService => {
                    subService.created_at = subService.created_at.toLocaleString().split(', ').join(' ')
                    subService.updated_at = subService.updated_at.toLocaleString().split(', ').join(' ')
                    return subService
                })

                return res.status(200).json({
                    data: {
                        service: findService.rows[0],
                        subService: subServiceById
                    }
                })
            }


            // query filter by user
            if (serviceName === 'undefined' && category === 'undefined' && sort === 'undefined' && !priceMin && !priceMax) {
                serviceQuery += groupBy
            }
            else if (serviceName !== '') {
                if (category === 'บริการทั้งหมด' && !priceMin && !priceMax && sort === 'บริการแนะนำ') {
                    serviceQuery = `
                    ${serviceQuery}
                    where service_name ilike '%$serviceName%'
                    `.replace('$serviceName', serviceName)
                    serviceQuery += groupBy
                } else if (category !== 'บริการทั้งหมด') {
                    serviceQuery = `
                    ${serviceQuery}
                    where service_name ilike '%$serviceName%'
                    and service_category_name ilike '$category'
                    `.replace('$serviceName', serviceName).replace('$category', category)
                    serviceQuery += groupBy
                } else if (priceMin && priceMax) {
                    serviceQuery = `
                    ${serviceQuery}
                    where service_name ilike '%$serviceName%'
                    and price_per_unit >= $priceMin and price_per_unit <= $priceMax
                    `.replace('$serviceName', serviceName).replace('$priceMin', priceMin).replace('$priceMax', priceMax)
                    serviceQuery += groupBy
                } else if (sort !== 'บริการแนะนำ') {
                    if (sort === 'ตามตัวอักษร (Ascending)') {
                        serviceQuery = `
                        ${serviceQuery}
                        where service_name ilike '%$serviceName%'
                        ${groupBy}
                        order by service_name asc
                        `.replace('$serviceName', serviceName)
                    } else if (sort === 'ตามตัวอักษร (Descending)') {
                        serviceQuery = `
                        ${serviceQuery}
                        where service_name ilike '%$serviceName%'
                        ${groupBy}
                        order by service_name desc
                        `.replace('$serviceName', serviceName)
                    }
                }
            }
            else if (category !== 'บริการทั้งหมด') {
                if (serviceName === '' && !priceMin && !priceMax && sort === 'บริการแนะนำ') {
                    serviceQuery = `
                        ${serviceQuery}
                        where service_category_name ilike '$category'
                        `.replace('$category', category)
                    serviceQuery += groupBy
                } else if (priceMin && priceMax) {
                    serviceQuery = `
                    ${serviceQuery}
                    where service_category_name ilike '$category'
                    and price_per_unit >= $priceMin and price_per_unit <= $priceMax
                    `.replace('$category', category).replace('$priceMin', priceMin).replace('$priceMax', priceMax)
                    serviceQuery += groupBy
                }
                else if (sort !== 'บริการแนะนำ') {
                    if (sort === 'ตามตัวอักษร (Ascending)') {
                        serviceQuery = `
                        ${serviceQuery}
                        where service_category_name ilike '$category'
                        ${groupBy}
                        order by service_name asc
                        `.replace('$category', category)
                    } else if (sort === 'ตามตัวอักษร (Descending)') {
                        serviceQuery = `
                        ${serviceQuery}
                        where service_category_name ilike '$category'
                        ${groupBy}
                        order by service_name desc
                        `.replace('$category', category)
                    }
                }
            }
            else if (priceMax && priceMin) {
                if (serviceName === '' && category === 'บริการทั้งหมด' && sort === 'บริการแนะนำ') {
                    serviceQuery = `
                    ${serviceQuery}
                    where price_per_unit >= $priceMin and price_per_unit <= $priceMax
                    `.replace('$priceMin', priceMin).replace('$priceMax', priceMax)
                    serviceQuery += groupBy
                }
                else if (sort !== 'บริการแนะนำ') {
                    if (sort === 'ตามตัวอักษร (Ascending)') {
                        serviceQuery = `
                        ${serviceQuery}
                        where price_per_unit >= $priceMin and price_per_unit <= $priceMax
                        ${groupBy}
                        order by service_name asc
                        `.replace('$priceMin', priceMin).replace('$priceMax', priceMax)
                    } else if (sort === 'ตามตัวอักษร (Descending)') {
                        serviceQuery = `
                        ${serviceQuery}
                        where price_per_unit >= $priceMin and price_per_unit <= $priceMax
                        ${groupBy}
                        order by service_name desc
                        `.replace('$priceMin', priceMin).replace('$priceMax', priceMax)
                    }
                }
            }
            else if (sort !== 'บริการแนะนำ') {
                if (sort === 'ตามตัวอักษร (Ascending)') {
                    serviceQuery = `
                        ${serviceQuery}
                        ${groupBy}
                        order by service_name asc
                        `
                } else if (sort === 'ตามตัวอักษร (Descending)') {
                    serviceQuery = `
                        ${serviceQuery}
                        ${groupBy}
                        order by service_name desc
                        `
                }
            }
            else {
                serviceQuery += groupBy
            }

            const findService = await pool.query(serviceQuery)
            const findSubService = await pool.query(subServiceQuery)
            //Set response format for service by filter
            const service = findService.rows.map(service => {
                service.created_at = service.created_at.toLocaleString().split(', ').join(' ')
                service.updated_at = service.updated_at.toLocaleString().split(', ').join(' ')
                return service
            })
            const subService = findSubService.rows.map(subService => {
                subService.created_at = subService.created_at.toLocaleString().split(', ').join(' ')
                subService.updated_at = subService.updated_at.toLocaleString().split(', ').join(' ')
                return subService
            })


            return res.status(200).json({
                data: {
                    service: service,
                    subService: subService
                }
            })

        } catch (err) {
            console.log(err);
            return res.status(400).json({
                msg: "service not found"
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
            where service_id = $4 returning *`, [serviceList.serviceName, new Date(), findServiceCategory.rows[0].service_category_id, serviceId])

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
                `, [subService.sub_service_name, subService.unit_name, subService.price_per_unit, new Date(), subService.sub_service_id])
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