import { pool } from "../utils/db.js";
import { format } from "date-fns";

const orderController = {
  async createOrder(req, res) {
    const address = `${req.body.address.homeAddress} ${req.body.address.subdistrict} ${req.body.address.district} ${req.body.address.province}`;
    const additionalText = req.body.additionalText;
    //Set Order Code
    const getDateFormatted = format(new Date(), "MMddyy");
    const getMilSec = Date.now().toString();
    const sliceMilSec = getMilSec.slice(9, 13);
    const orderCode = `HS${getDateFormatted}${sliceMilSec}`;

    //Random Name for Engineer
    const getRandomNum = (max) => {
      return Math.floor(Math.random() * max);
    };
    let engineer;
    switch (getRandomNum(3)) {
      case 0:
        engineer = "เก่งกาจ ทำได้";
        break;
      case 1:
        engineer = "อาจหาญ ปลั้คหลุด";
        break;
      case 2:
        engineer = "สายหยุด สะดุดสายไฟ";
        break;
    }

    //Set default Status
    const status = "รอดำเนินการ";

    try {
      //Insert to order Table
      const order = await pool.query(
        `insert into orders(
          user_id, 
          service_id, 
          order_code,
          appointment_date, 
          appointment_time, 
          address,
          additional_text,
          total_price, 
          engineer, 
          status)
                values (
                    $1,
                    $2,
                    $3,
                    $4,
                    $5,
                    $6,
                    $7,
                    $8,
                    $9,
                    $10
                ) returning order_id, user_id`,
        [
          req.body.userId,
          req.body.serviceId,
          orderCode,
          req.body.date,
          req.body.time,
          address,
          additionalText,
          req.body.totalPrice,
          engineer,
          status,
        ]
      );

      //Insert to Sub order table

      const orderId = order.rows[0].order_id;
      const userId = order.rows[0].user_id;
      const subService = req.body.subServices;
      // const subService = req.body.subService

      subService.map(async (subService) => {
        await pool.query(
          `
          insert into sub_orders(order_id, user_id, sub_service_id, count, sub_total_price)
          values($1, $2, $3, $4, $5)`,
          [
            orderId,
            userId,
            subService.sub_service_id,
            subService.count,
            subService.sub_total_price,
          ]
        );
      });

      return res.status(201).json({
        msg: "order has been created",
      });
    } catch (error) {
      console.error(error);
      return res.status(400).json({
        msg: "invalid input on create order",
      });
    }
  },
  async getOrders(req, res) {
    const orderId = req.query.orderId;
    const userId = req.query.userId;
    const orderQuery = `
      select orders.order_id, orders.user_id, order_code, service.service_name, address, additional_text, appointment_date, appointment_time, total_price, engineer, status from orders
      inner join service
      on service.service_id = orders.service_id
    `;
    const subOrderQuery = `
      select sub_orders.order_id, sub_orders.sub_order_id, sub_orders.user_id, sub_service.sub_service_name, sub_orders.count, sub_orders.sub_total_price from sub_orders
      inner join sub_service
      on sub_service.sub_service_id = sub_orders.sub_service_id
      `;

    const allOrder = orderQuery;
    const orderById = [`${orderQuery} where order_id = $1`, [orderId]];
    const orderByUserId = [
      `${orderQuery} where user_id = $1`,
      [Number(userId)],
    ];

    try {
      //Get order by order id
      if (orderId) {
        const getOrderById = await pool.query(...orderById);
        const getSubOrder = await pool.query(
          `${subOrderQuery} where order_id = $1`,
          [orderId]
        );

        return getOrderById.rows.length >= 1
          ? res.status(200).json({
            data: {
              order: getOrderById.rows[0],
              subOrder: getSubOrder.rows,
            },
          })
          : res.status(200).json({ msg: "order not found" });
      }
      //Get order by user id
      else if (userId) {
        const getOrderByUserId = await pool.query(...orderByUserId);
        // console.log(getOrderByUserId.rows[0])
        const getSubOrder = await pool.query(
          `${subOrderQuery} where user_id = $1`,
          [Number(userId)]
        );

        const setOrderList = getOrderByUserId.rows.map((order) => {
          const subOrder = getSubOrder.rows.filter(
            (subOrder) => subOrder.order_id === order.order_id
          );
          order.subOrder = subOrder;
          return order;
        });

        return getOrderByUserId.rows.length >= 1
          ? res.status(200).json({
            data: setOrderList,
          })
          : res.status(200).json({ msg: "order not found" });
      }

      //Get All Order
      else {
        const getOrders = await pool.query(allOrder);
        return res.status(200).json({
          data: getOrders.rows,
        });
      }
    } catch (err) {
      console.log(err);
      res.status(400).json({
        msg: "invalid input on getOrders",
      });
    }
  },

  async getSubOrderByOrderId(req, res) {
    const orderId = req.query.orderId;
    try {
    } catch (err) {
      console.err(err);
      return res.status(400).json({
        msg: "input invalit on getSubOrderByOrderId",
      });
    }

    if (orderId) {
      const getSubOrderByOrderId = await pool.query(
        `select 
      sub_orders.sub_order_id, 
      sub_orders.order_id, 
      sub_service.sub_service_name,
      sub_orders.count,
      sub_orders.sub_total_price
      from sub_orders 

      inner join sub_service
      on sub_service.sub_service_id = sub_orders.sub_service_id

      where order_id = $1`,
        [orderId]
      );
      return getSubOrderByOrderId.rows.length >= 1
        ? res.status(200).json({
          data: getSubOrderByOrderId.rows,
        })
        : res.status(200).json({
          msg: "order not found",
        });
    } else {
      const getAllSubOrder = await pool.query(`select * from sub_orders`);
      return res.status(200).json({
        data: getAllSubOrder.rows,
      });
    }
  },
};

export default orderController;
