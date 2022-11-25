import orderController from "../controllers/order.controller.js";
import Route from "express";

const orderRoute = Route();

orderRoute.post("/", orderController.createOrder);

export default orderRoute;
