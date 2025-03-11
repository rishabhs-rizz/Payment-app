const express = require("express");
const router = express.Router();

const zod = require("zod");
const jwt = require("jsonwebtoken");
const { User } = require("../db");
const { Account } = require("../db")
const JWT_SECRET  = require("../config");
const  auth_middleware  = require("../middleware")

try{
    const signupBody = zod.object({
        username: zod.string().email(),
        firstName: zod.string(),
        lastName: zod.string(),
        password: zod.string()
    })
    
    router.post("/signup", async (req, res) => {
        const { success } = signupBody.safeParse(req.body);
        if(!success){ // stop if given data is not in required format
            return res.json({
                message: "E-mail already exists/incorrect inputs"
            })
        }
    
        const existingUser = await User.findOne({
            username: req.body.username
        })
    
        if(existingUser){
            // stop if the given username already exists
            return res.json({
                message: "E-mail already exists/incorrect inputs"
            })
        }
    
        const user = await User.create({
            username: req.body.username,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName
        })
        const UserId = user._id;
    
        await Account.create({
            userId: UserId,
            balance: 1 + Math.random() * 10000
        })
        const token = jwt.sign({
            UserId: UserId
        }, JWT_SECRET);
    
        res.json({
            message: "user successfully registered",
            token: token,
        })
    })
}catch(e){console.error(e);}

try{
    
    router.post("/signin", async (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
    
        const existingUser = await User.findOne({
            username: username
        })
    
        if(existingUser){
            
            res.json({
                message: "you are successfully logged in",
            })
        }else {
            res.json({
                message: "incorrect username or password"
            })
        }
    })
}catch(e){console.error(e);}


try {
    const updatedBody = zod.object({

        password: zod.string().optional(),
        firstName: zod.string().optional(),
        lastName: zod.string().optional()
    })
    
    router.put("/updation", auth_middleware, async (req, res) => {
        const { success } = updatedBody.safeParse(req.body);
        if(!success){ // stop if given data is not in required format
            return res.json({
                message: "error while updating information"
            })
        }
    
        await User.updateOne(req.body, {
            id: req.UserId
        })
    
        res.json({
            message: "updated successfully"
        })
    })
} catch (e) {
    console.error(e);
}

try {
    router.get("/bulk", async (req , res) => {
        console.log("Route Hit")
        const filter = req.query.filter || "";
    
        const Users = await User.find({
            $or: [
                { firstName: { $regex: filter, $options: "i" } },
                { lastName: { $regex: filter, $options: "i" } }
            ]
        })
    
        res.json({
            user: Users.map(user => ({
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                _id: user._id
            }) || [])
        })
    })    
} catch (e) {
    console.error(e);
}


module.exports = router;