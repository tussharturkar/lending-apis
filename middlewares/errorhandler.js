export const errorHandler = async (error, req, res, next) => {
     // console.log(error)
     res.status(error.statusCode || 500).json({ error } || "someting went wrong");
     next()
}