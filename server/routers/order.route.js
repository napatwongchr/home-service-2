import orderController from "../controllers/order.controller.js";
import Route from "express";

const orderRoute = Route();

orderRoute.post("/", orderController.createOrder);
orderRoute.get("/", orderController.getOrders);
orderRoute.get("/suborders", orderController.getSubOrderByOrderId)

export default orderRoute;
