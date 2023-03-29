import { error, http } from "../helper/response.service.js";
export const tryCatch = (controller) => async (req, res,next) => {
    let data = {};
    try {
        data = await controller(req, res);
        const response = await http(req, data);
        res.status(response.statusCode).json(response);
    } catch (err) {
        const response = await error(req, err);
        next(response);
    }
}