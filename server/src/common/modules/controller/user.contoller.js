import { pool } from '../../../utrils/db.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userController = {
    async register (req, res) {
        try{
            let password = req.body.password

            //password condition == password must include both Uppercase and Lowercase and lanth of password must morethen 15
            const passwordConditionCheck = /[A-Z]/g.test(password) && /[a-z]/g.test(password) && password.length >= 16

            //Email form Validate
            const EMAIL_REGEX =/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            const emailConditionCheck = EMAIL_REGEX.test(req.body.email)

            //phonenumber condition check
            // const PhoneNumber_Regex = /((\+66|0)(\d{1,2}\-?\d{3}\-?\d{3,4}))|((\+๖๖|๐)([๐-๙]{1,2}\-?[๐-๙]{3}\-?[๐-๙]{3,4}))/gm;
            // const phoneConditionCheck = PhoneNumber_Regex.test(req.body.phoneNumber)

            // if(!phoneConditionCheck){
            //     return res.json({
            //         msg : "invalid form of phone number"
            //     })
            // }
            
            if(!emailConditionCheck){
                return res.json({
                    msg : "invalid email"
                })
            }
    
            if(!passwordConditionCheck){
                return res.json({
                    msg : "password must greater then 15 character and contain uppercase and lower case"
                })
            }

            const salt = await bcrypt.genSalt(10)
            password = await bcrypt.hash(password, salt)

            //เช็คว่า ถ้าชื่อ ขึ้นต้นด้วย เว้นวรรค จะไม่ให้ผ่าน
            if(/^\s/.test(req.body.fullname)){
                return res.json({
                    msg : "fullname must start with character"
                })
            }
            const splitedFullname = req.body.fullname.split(' ')
            const removeSpace = splitedFullname.filter(item => item !== "")
            const firstName = removeSpace[0]
            const lastName = removeSpace[1]

    
            //เมื่อ สร้าง user แล้ว ตัว recentUserId จะเก็บ user_id ที่เพิ่มล่าสุดเอาไว้ เพื่อรองรับการเอาไปใช้ในการแสดงผล user ที่เพิ่งสมัครได้
            const recentUserId = await pool.query(`insert into users(firstname, lastname, phone_number, email, password)
            values($1, $2, $3, $4, $5) returning(user_id)`, 
            [
                firstName,
                lastName,
                req.body.phoneNumber,
                req.body.email,
                password
            ])
            
    
            return res.status(201).json({
                msg : "user has been created",
                data : recentUserId.rows[0]
            })

        }catch(err){
            console.log(err)
            return res.status(400).json({
                msg : "invalid input"
            })
        }

    },

    async login(req, res) {
        try{
            const hasUser = await pool.query("select * from users where email = $1", [req.body.email])
            const user = hasUser.rows[0]
            if(!user){
                return res.json({
                    msg : "user not fround"
                })
            }
            

            const isValidPassword = await bcrypt.compare(req.body.password, user.password)
            if(!isValidPassword){
                return res.json({
                    msg : "password is invalid"
                })
            }

            const token = jwt.sign(
                {
                    id : user.user_id,
                    fitstname : user.firstname,
                    lastname : user.lastname
                },
                process.env.SECRET_KEY,
                {
                    expiresIn : 1800000
                }
            )

            return res.json({
                msg : "login successfully",
                token
            })


        }catch(err){
            console.log(err)
            return res.status(400).json({
                msg : "something wrong"
            })
        }
    },

    async getUser (req, res) {
        const result = await pool.query(`select user_id, firstname, lastname, phone_number, email from users`);
        res.json({
            data : result.rows
        })
    }
}

export default userController;