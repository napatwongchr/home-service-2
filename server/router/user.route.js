import Route from 'express'
import userController from '../controller/user.contoller.js'

const userRoute = Route();

userRoute.get('/', userController.getUser)
userRoute.post('/register', userController.register)
userRoute.post('/login', userController.login)

export default userRoute;