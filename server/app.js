import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
dotenv.config()

import userRoute from './routers/user.route.js'
import serviceRoute from './routers/service.route.js'

const port = process.env.PORT || 4012

const app = express();
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("hello world")
})
app.use('/users', userRoute)
app.use('/service', serviceRoute)

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})