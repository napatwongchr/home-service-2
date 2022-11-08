import Route from 'express'
import serviceCategoryController from '../controllers/service-category.contoller.js';
import serviceListController from '../controllers/service-list.controller.js';
import multer from "multer";

const upload = multer({ dest: 'uploads/' });
const serviceRoute = Route();

// Category
serviceRoute.get('/category', serviceCategoryController.getServiceCategory);
serviceRoute.post('/category', serviceCategoryController.createServiceCategory);
serviceRoute.put('/category', serviceCategoryController.editServiceCategory);
serviceRoute.delete('/category', serviceCategoryController.deleteServiceCategory);


serviceRoute.post('/', upload.single("serviceImage"), serviceListController.createServiceList);
serviceRoute.get('/', serviceListController.getService);

export default serviceRoute;