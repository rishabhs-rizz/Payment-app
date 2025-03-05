const express = require("express");
const auth_middleware = require("../middleware");
const { Account } = require("../db");
const { default: mongoose } = require("mongoose");
const router = express.Router();

router.get("/balance", auth_middleware, async (req , res) => {
    const account = await Account.findOne({
        userId: req.UserId
    })

    res.json({
        balance: account.balance
    })
})

router.post("/transfer", auth_middleware, async (req , res) => {
    const session = await mongoose.startSession();

    session.startTransaction();
    const { amount , to } = req.body;

    const account = await Account.findOne({
        userId: req.UserId
    }).session(session);

    if(!account || account.balance < amount){
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance"
        });
    }

    const toAccount = await Account.findOne({
        userId: to
    }).session(session);

    if(!toAccount){
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        });
    }

    await Account.updateOne({ userId: req.UserId }, { $inc: { balance: -amount}}).session(session);

    await Account.updateOne({ userId: to }, { $inc: { balance: amount }}).session(session);

    await session.commitTransaction();
    res.json({
        message: "Transfer successful"
    });

})
module.exports = router;