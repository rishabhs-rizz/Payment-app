const express = require("express");
const router = express.Router();

const zod = require("zod");
const jwt = require("jsonwebtoken");
const { User } = require("../db")
const { JWT_SECRET } = require("../config");
const { auth_middleware } = require("../middleware")

const signupBody = zod.object({
    username: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string()
})

router.get("/signup", async (req, res) => {
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
    const UserId = user._id

    const token = jwt.sign({
        UserId
    }, JWT_SECRET);

    res.json({
        message: "user successfully registered",
        token: token
    })
})

const updatedBody = zod.object({

    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional()
})

router.put("/", auth_middleware, async (req, res) => {
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

router.get("/bulk", auth_middleware, async (req , res) => {
    const filter = req.query.filter || "";

    const Users = await User.find({
        $or: [{
            firstName: {
                $regex: filter
            },
            lastName: {
                $regex: filter
            }
        }]
    })

    res.json({
        user: Users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})

module.exports = router;