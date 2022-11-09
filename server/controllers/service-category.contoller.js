import { query } from "express";
import { pool } from "../utils/db.js";

const serviceCategoryController = {
    async createServiceCategory(req, res) {
        try {
            const findCategory = await pool.query(`select * from service_category where service_category_name = $1`, [req.body.categoryName])
            const hasCategory = Boolean(findCategory.rows[0])

            if (hasCategory) {
                return res.status(403).json({
                    msg: "this service has already exist"
                })
            }
            const serviceCategory = await pool.query(`insert into service_category( service_category_name, created_at, updated_at )
            values (
                $1,
                to_char(current_timestamp, 'DD/MM/YYYY HH:MI AM'),
                to_char(current_timestamp, 'DD/MM/YYYY HH:MI AM')
            ) returning service_category_id
            `, [req.body.categoryName])

            return res.status(201).json({
                msg: "add service successfully",
                data: serviceCategory.rows[0]
            })

        } catch (err) {
            return res.status(400).json({
                msg: "invalid input"
            })
        }
    },

    async getServiceCategory(req, res) {
        try {
            //find category by categoryId
            if (req.query.categoryId) {
                let categoryId = req.query.categoryId
                const findCategory = await pool.query(`select * from service_category where service_category_id = $1`, [categoryId])
                if (!Boolean(findCategory.rows[0])) {
                    return res.status(404).json({
                        msg: "category not found"
                    })
                }
                return res.status(200).json({
                    data: findCategory.rows[0]
                })
            }
            else if (req.query.categoryName) {
                let categoryName = req.query.categoryName
                const findCategory = await pool.query(`select * from service_category where service_category_name = $1`, [categoryName])
                if (!Boolean(findCategory.rows[0])) {
                    return res.status(404).json({
                        msg: "category not found"
                    })
                }
                return res.status(200).json({
                    data: findCategory.rows[0]
                })
            }
            else if (Object.keys(req.query).length > 0) {
                return res.status(404).json({
                    msg: "invalid query"
                })
            }

            const allServiceCategory = await pool.query(`select * from service_category`)
            return res.status(200).json({
                data: allServiceCategory.rows
            })
        } catch (err) {
            return res.status(400).json({
                msg: "invalid input"
            })
        }
    },

    async editServiceCategory(req, res) {
        try {
            let categoryId = req.query.categoryId
            let categoryName = req.body.categoryName
            await pool.query(`update service_category
                set service_category_name = $1, 
                updated_at = to_char(current_timestamp, 'DD/MM/YYYY HH:MI AM')
                where service_category_id = $2
            `, [categoryName, categoryId])

            const getRecentupdate = await pool.query(`select * from service_category where service_category_id = $1`, [categoryId])

            return res.status(200).json({
                msg: "category updated",
                data: getRecentupdate.rows[0]
            })

        } catch (err) {
            return res.status(400).json({
                msg: "invalid input"
            })
        }
    },

    async deleteServiceCategory(req, res) {
        await pool.query(`delete from service_category where service_category_id = $1`, [req.query.categoryId])
        return res.status(202).json({
            msg: "category has been deleted"
        })
    }
}

export default serviceCategoryController;