import Route from 'express'
import serviceController from '../controllers/service.controller.js';

const serviceRoute = Route()

serviceRoute.post('/category', serviceController.createServiceCategory)

export default serviceRoute;