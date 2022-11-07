import Route from 'express'
import serviceController from '../controllers/service.controller.js';

const serviceRoute = Route();

serviceRoute.get('/category', serviceController.getServiceCategory);
serviceRoute.post('/category', serviceController.createServiceCategory);

export default serviceRoute;