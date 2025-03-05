const jwt = require("jsonwebtoken");
const  JWT_SECRET  = require("./config");

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */

const MiddleWare = (req, res, next) => {
    const authHEADER = req.headers.authorization;
    console.log(req.headers);

    if(!authHEADER || !authHEADER.startsWith('Bearer')) {
        return res.status(403).json({
            message: "token not received"
        });
    }

    const token = authHEADER.split(' ')[1];
    console.log(token);
    console.log(JWT_SECRET);

    

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        console.log(decoded);
        console.log(JWT_SECRET);

        if(decoded.UserId){
            req.UserId = decoded.UserId;
            next();
        }else {
            return res.status(403).json({
                message: "no userID"
            });
        }
    } catch (err) {
        return res.status(403).json({
            message: "code fat gaya"
        });
    }
};

module.exports =  MiddleWare
