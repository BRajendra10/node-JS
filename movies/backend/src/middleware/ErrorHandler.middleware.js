export const globalErrorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;

    if(!err.isOperational) {
        console.log("Programmer error: ", err)

        return res.status(500).json({
            success: false,
            message: "Internal server error !!"
        })
    }

    return res.status(err.statusCode).json({
        success: false,
        message: err.message,
        errors: err.errors || []
    })

}
