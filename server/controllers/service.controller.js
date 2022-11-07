import { pool } from "../utils/db.js";

const serviceController = {
    async createServiceCategory (req, res) {

        const findCategory = await pool.query(`select * from service_category where service_category_name = $1`, [ req.body.serviceCategoryName ])
        const hasCategory = Boolean(findCategory.rows[0])
        console.log(hasCategory)
        if (hasCategory){
            return res.status(403).json({
                msg : "this service has already exist"
            })
        }
        const serviceCategory = await pool.query(`insert into service_category( service_category_name, created_at, updated_at )
        values (
            $1,
            to_char(current_timestamp, 'DD/MM/YYYY HH:MI AM'),
            to_char(current_timestamp, 'DD/MM/YYYY HH:MI AM')
        ) returning service_category_id
        `, [req.body.serviceCategoryName])

        return res.status(201).json({
            msg : "add service successfully",
            data : serviceCategory.rows[0]
        })
    }
}

export default serviceController;