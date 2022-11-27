import { pool } from "../utils/db.js";
import { format } from 'date-fns'

const orderController = {
  async createOrder(req, res) {

    //Set Order Code
    const getDateFormated = format(new Date(), 'MMddyy')
    const getMilisec = Date.now().toString()
    const sliceMilisec = getMilisec.slice(9, 13)
    const orderCode = `HS${getDateFormated}${sliceMilisec}`

    //Random Name for Engineer
    const getRandomNum = (max) => {
      return Math.floor(Math.random() * max)
    }
    let engineer;
    switch(getRandomNum(3)) {
        case 0 : engineer = "เก่งกาจ ทำได้"
        break;
        case 1 : engineer = "อาจหาญ ปลั้คหลุด"
        break;
        case 2 : engineer = "สายหยุด สะดุดสายไฟ"
        break;
    }
    
    //Set default Status
    const status = "รอดำเนินการ"
    
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
                    $9
                ) returning order_id`,
        [
          req.body.userId,
          req.body.serviceId,
          orderCode,
          req.body.appointmentDate,
          req.body.appointmentTime,
          req.body.address,
          req.body.totalPrice,
          engineer,
          status
        ]
      );
      
      //Insert to Sub order table
      
      const orderId = order.rows[0].order_id
      const subService = JSON.parse(req.body.subService)
      // const subService = req.body.subService

      subService.map(async (subService) => {
        await pool.query(
          `
          insert into sub_orders(order_id, sub_service_id, quantity, sub_total_price)
          values($1, $2, $3, $4)`,
          [
            orderId,
            subService.sub_service_id,
            subService.quantity,
            subService.sub_total_price
          ]
        )
      })

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
  async getOrders ( req, res ) {
    const orderId = req.query.orderId
    const orderQuery = `
      select order_code, service.service_name, appointment_date, appointment_time, total_price from orders
      inner join service
      on service.service_id = orders.service_id
    `
    const subOrderQuery = [`
      select sub_orders.sub_order_id, sub_service.sub_service_name, sub_orders.quantity, sub_orders.sub_total_price from sub_orders
      inner join sub_service
      on sub_service.sub_service_id = sub_orders.sub_service_id
      where order_id = $1
      `, [orderId]]

    
    const allOrder = orderQuery
    const orderById = [`${orderQuery} where order_id = $1`, [orderId]]
    
    try{
      //Get order by id
      if(orderId){
        const getOrderById = await pool.query(...orderById)
        const getSubOrder = await pool.query(...subOrderQuery)

        return getOrderById.rows.length>=1 ?
        res.status(200).json({
          data : {
            order : getOrderById.rows[0],
            subOrder : getSubOrder.rows
          }
        }) : 
        res.status(404).json({ msg : "order not found"})
      }

      //Get All Order
      else {
        const getOrders = await pool.query(allOrder)
        return res.status(200).json({
          data : getOrders.rows
        })
      }

    } catch(err){
      console.log(err)
      res.status(400).json({
        msg : "invalid input on getOrders"
      })
    }
  },
  
  async getSubOrderByOrderId (req, res) {
    const orderId = req.query.orderId
    try{

    } catch(err){
      console.err(err)
      return res.status(400).json({
        msg : "input invalit on getSubOrderByOrderId"
      })
    }

    if(orderId) {
      const getSubOrderByOrderId = await pool.query(`select 
      sub_orders.sub_order_id, 
      sub_orders.order_id, 
      sub_service.sub_service_name,
      sub_orders.quantity,
      sub_orders.sub_total_price
      from sub_orders 

      inner join sub_service
      on sub_service.sub_service_id = sub_orders.sub_service_id

      where order_id = $1`, [orderId])
      return getSubOrderByOrderId.rows.length >= 1 ? 
      res.status(200).json({
        data : getSubOrderByOrderId.rows
      }) : 
      res.status(404).json({
        msg : "order not found"
      })
    }
    else {
      const getAllSubOrder = await pool.query(`select * from sub_orders`)
      return res.status(200).json({
        data : getAllSubOrder.rows
      })
    }

  }
};

export default orderController;
