import jwt from "jsonwebtoken";
import config from '../config.js';

const tokenKey = config.secretKey;
export const sign = async (req, res, next) => {
    let token;
    console.log(req)
    try {
        token = jwt.sign("key", tokenKey);
    } catch (error) {
        // return next(error);
    }
    return token;
}

export const verify = async (req, res, next) => {
    let token = req.headers.authorization;
    try {
        if (!token) { throw new Error("Authentication failed check authorization") }
        if (token.startsWith('Berear')) {
            token = token.split(' ')[1];
        }
        else {
            jwt.verify(token, tokenKey, function (err, decoded) {
                console.log(decoded)
            })
      }
    } catch (error) {
        res.status(401).json(error.message)
    }
}
