import logger from "../utils/logger.js";

const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;

    logger.error(err.message);

    res.status(statusCode).json({
        status: err.status || "error",
        message: err.message || "Internal Server Error",
    });
};

export default errorHandler;