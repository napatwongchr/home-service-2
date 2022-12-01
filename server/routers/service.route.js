import Route from "express";
import serviceCategoryController from "../controllers/service-category.contoller.js";
import serviceListController from "../controllers/service-list.controller.js";
import multer from "multer";
import { protect } from "../middlewares/authProtect.js";

const upload = multer({ dest: "uploads/" });
const serviceRoute = Route();
// Service
serviceRoute.get("/", serviceListController.getService);
// Service Category
serviceRoute.get("/category", serviceCategoryController.getServiceCategory);

serviceRoute.use(protect);
// Service
serviceRoute.post(
  "/",
  upload.single("serviceImage"),
  serviceListController.createServiceList
);
serviceRoute.put(
  "/",
  upload.single("serviceImage"),
  serviceListController.updateService
);
serviceRoute.delete("/", serviceListController.deleteService);

// Service Category
serviceRoute.post("/category", serviceCategoryController.createServiceCategory);
serviceRoute.put("/category", serviceCategoryController.editServiceCategory);
serviceRoute.delete(
  "/category",
  serviceCategoryController.deleteServiceCategory
);

export default serviceRoute;
