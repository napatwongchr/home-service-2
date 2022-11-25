import { pool } from "../utils/db.js";

const orderController = {
  async createOrder(req, res) {
    try {
      const order = await pool.query(
        `insert into orders(user_id,service_id,order_code,appointment_date,appointment_time,address,total_price,engineer)
                values (
                    $1,
                    $2,
                    $3,
                    $4,
                    $5,
                    $6,
                    $7,
                    $8
                ) 
                `,
        [
          req.body.userId,
          req.body.serviceId,
          req.body.orderCode,
          req.body.appointmentDate,
          req.body.appointmentTime,
          req.body.address,
          req.body.totalPrice,
          req.body.engineer,
        ]
      );
      return res.status(201).json({
        msg: "order has been created",
      });
    } catch (error) {
      console.error(error);
      return res.status(400).json({
        msg: "invalid input",
      });
    }
  },
};

export default orderController;
