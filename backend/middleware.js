const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */

const MiddleWare = (req, res, next) => {
    const authHEADER = req.headers.authorization;

    if(!authHEADER || authHEADER.startsWith('Bearer')) {
        return res.status(403).json({});
    }

    const token = authHEADER.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        if(decoded.UserId){
            req.UserId = decoded.UserId;
            next();
        }else {
            return res.status(403).json({});
        }
    } catch (err) {
        return res.status(403).json({});
    }
};

module.exports = {
    MiddleWare
}