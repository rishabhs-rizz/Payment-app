const express = require("express");
const auth_middleware = require("../middleware");
const { Account } = require("../db");
const router = express.Router();

router.get("/balance", auth_middleware, async (req , res) => {
    const account = await Account.findOne({
        userId: req.userId
    })

    res.json({
        balance: account.balance
    })
})
module.exports = router;