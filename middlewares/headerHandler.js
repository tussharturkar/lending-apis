import jwt from "jsonwebtoken";
import config from '../config.js';
import Entity from "../models/Entity.db.js";
import { error } from "../helper/response.service.js";
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
        if (!token) { throw new Error("Unauthorized") }
        if (token.startsWith('Bearer')) {
            token = token.split(' ')[1];
        }
        await jwt.verify(token, tokenKey, async function (err, decoded) {
            if (err) {
                throw new Error("Unauthorized")
            }
            const isEntity = await Entity.findOne(decoded)
            if(!isEntity){throw new Error("Forbidden")}
             req.entity=decoded
        })
        next()
    } catch (err) {
        const data = await error(req,err)
        // res.status(401).json(data)
        next(data)
    }
}
