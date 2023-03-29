import { apiLog } from "../services/apiLog.service.js";
import errorMessage from "./errorMessages.service.js";


export const http = async (req, data, log = true) => {
    let payload;
    try {
        payload = {
            statusCode: getStatusCode(req.method),
            success: true,
            data: data,
            error: {}
        }
        if (log) {
            const meta = {
                method: req.method,
                endPoint: req.route.path,
                headers: JSON.stringify(req.headers),
                req: JSON.stringify(req.body),
                res: JSON.stringify(payload),
            }
            await apiLog(meta);
        }
        return payload;

    } catch (error) {
        throw new Error(error.message);
    }
}

export const error = async (req, err, code = 500) => {
    let payload = {
        statusCode: err ? err.statusCode : code,
        success: false,
        data: {},
        error: {
            message: ""
        }
    }
    try {
        const errName = errorMessage[err.message];
        payload.statusCode = errName ? errName.statusCode : code;
        payload.error.message = errName ? errName.message : err.message;
        return payload;
} catch (error) {
        throw new Error(error.message);
}
}

function getStatusCode(method) {
    switch (method) {
        case 'GET':
            return 200;
        case 'POST':
            return 201;
        case 'PUT':
            return 202;
        case 'DELETE':
            return 202;
        default:
            return 405;
    }
}