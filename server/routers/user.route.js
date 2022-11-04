import Route from 'express'
import userController from '../controllers/user.controller.js'

const userRoute = Route();

userRoute.get('/', userController.getUser)
userRoute.get('/email', userController.getUserByEmail)
userRoute.post('/register', userController.register)
userRoute.post('/login', userController.login)

export default userRoute;