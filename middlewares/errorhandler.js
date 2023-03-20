export const errorHandler = async (error, req, res, next) => {
    return res.status(400).json(error.message);
}