import { pool } from "../utils/db.js";

const serviceCategoryController = {
  async createServiceCategory(req, res) {
    try {
      const findCategory = await pool.query(
        `
        select * from service_category 
        where service_category_name = $1
        `,
        [req.body.categoryName]
      );
      const hasCategory = Boolean(findCategory.rows[0]);
      if (hasCategory) {
        return res.status(403).json({
          msg: "this service has already exist",
        });
      }
      const serviceCategory = await pool.query(
        `insert into service_category(service_category_name, created_at, updated_at )
            values (
                $1,
                $2,
                $3
            ) returning service_category_id
            `,
        [req.body.categoryName, new Date(), new Date()]
      );

      return res.status(201).json({
        msg: "add category successfully",
        data: serviceCategory.rows[0],
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        msg: "invalid input",
      });
    }
  },

  async getServiceCategory(req, res) {
    try {
      //Get Category By ID
      if (req.query.categoryId) {
        let categoryId = req.query.categoryId;
        const findCategoryById = await pool.query(
          `
          select * from service_category 
          where service_category_id = $1
          `,
          [categoryId]
        );
        if (!Boolean(findCategoryById.rows[0])) {
          return res.status(404).json({
            msg: "category not found",
          });
        }
        //Set Response Format for Category By ID
        const CategoryById = findCategoryById.rows[0];
        CategoryById.created_at = CategoryById.created_at
          .toLocaleString()
          .split(", ")
          .join(" ");
        CategoryById.updated_at = CategoryById.updated_at
          .toLocaleString()
          .split(", ")
          .join(" ");
        return res.status(200).json({
          data: CategoryById,
        });
      } else if (req.query.categoryName) {
        let categoryName = `%${req.query.categoryName}%` || "";
        const findCategoryByName = await pool.query(
          `
          select * from service_category
          where service_category_name ilike $1
          `,
          [categoryName]
        );

        //Set Response Format for Category By Name
        const categoryByName = findCategoryByName.rows.map((category) => {
          category.created_at = category.created_at
            .toLocaleString()
            .split(", ")
            .join(" ");
          category.updated_at = category.updated_at
            .toLocaleString()
            .split(", ")
            .join(" ");
          return category;
        });

        return res.status(200).json({
          data: categoryByName,
        });
      } else if (Object.keys(req.query).length > 0) {
        return res.status(404).json({
          msg: "invalid query",
        });
      }

      //Get All Service Category
      const allServiceCategory = await pool.query(
        `select * from service_category`
      );
      //Set Response Format for get all category
      const mapedCategory = allServiceCategory.rows.map((category) => {
        category.created_at = category.created_at
          .toLocaleString()
          .split(", ")
          .join(" ");
        category.updated_at = category.updated_at
          .toLocaleString()
          .split(", ")
          .join(" ");
        return category;
      });
      return res.status(200).json({
        data: mapedCategory,
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        msg: "invalid input",
      });
    }
  },

  async editServiceCategory(req, res) {
    try {
      let categoryId = req.query.categoryId;
      let categoryName = req.body.categoryName;
      await pool.query(
        `
        update service_category
        set service_category_name = $1, 
        updated_at = $2
        where service_category_id = $3
            `,
        [categoryName, new Date(), categoryId]
      );

      const getRecentupdate = await pool.query(
        `
        select * from service_category
        where service_category_id = $1
        `,
        [categoryId]
      );

      return res.status(200).json({
        msg: "category updated",
        data: getRecentupdate.rows[0],
      });
    } catch (err) {
      return res.status(400).json({
        msg: "invalid input",
      });
    }
  },

  async deleteServiceCategory(req, res) {
    await pool.query(
      `
      delete from service_category
      where service_category_id = $1
      `,
      [req.query.categoryId]
    );
    return res.status(202).json({
      msg: "category has been deleted",
    });
  },
};

export default serviceCategoryController;
