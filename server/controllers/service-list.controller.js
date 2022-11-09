import { pool } from "../utils/db.js";
import { cloudinaryUpload } from "../utils/upload.js";

const serviceListController = {
    async createServiceList(req, res) {
        try {
            const serviceList = {
                serviceName: req.body.serviceName,
                serviceCategory: req.body.serviceCategory,
                serviceSubList: req.body.serviceList,
            }

            const serviceUrl = await cloudinaryUpload(req.file);
            serviceList['serviceImage'] = serviceUrl


            const serviceImageUrl = serviceList.serviceImage[0].url
            const serviceName = serviceList.serviceName
            const serviceCategory = serviceList.serviceCategory

            //Get service category id
            const findServiceCategory = await pool.query(`select service_category_id from service_category where service_category_name = $1`, [serviceCategory])
            const serviceCategoryId = findServiceCategory.rows[0]["service_category_id"]

            const addService = await pool.query(`insert into service(service_category_id, service_name, service_image_url, created_at, updated_at)
                values (
                    $1, $2, $3, 
                    to_char(current_timestamp, 'DD/MM/YYYY HH:MI AM'), 
                    to_char(current_timestamp, 'DD/MM/YYYY HH:MI AM') 
                    ) returning service_id
            `, [serviceCategoryId, serviceName, serviceImageUrl])

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
            console.log(err)
            return res.status(400).json({
                msg: "invalid input"
            })
        }
    },
    async getService ( req, res ) {
        try{
            const findService = await pool.query(`select * from service`)
            return res.status(200).json({
                data : findService.rows
            })
        } catch(err){
            return res.status(400).json({
                msg : "invalid input"
            })
        }
        
    }
}

export default serviceListController;