import Route from 'express'
import serviceCategoryController from '../controllers/service-category.contoller.js';

const serviceRoute = Route();

serviceRoute.get('/category', serviceCategoryController.getServiceCategory);
serviceRoute.post('/category', serviceCategoryController.createServiceCategory);
serviceRoute.put('/category', serviceCategoryController.editServiceCategory);

export default serviceRoute;