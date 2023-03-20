import Apilog from "../models/ApiLog.db.js";

export async function apiLog(data) {
    try {
        await Apilog.create(data);
    } catch (error) {
        return next(error);
    }
}