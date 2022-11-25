import { pool } from "../utils/db.js";

const orderController = {
  async createOrder(req, res) {
    try {
      const order = await pool.query(
        `insert into order(card_no.,name_on_card,expired_date,CVC/CVV, )
                values (
                    $1,
                    $2,
                    $3,
                    $4 
                ) returning order_id
                `,
        [req.body.cardNumber, new Date(), new Date()]
      );
    } catch (error) {}
  },
};

export default orderController;
