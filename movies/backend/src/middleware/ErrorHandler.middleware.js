export const globalErrorHandler = (err, req, res, next) => {

    // Default to 500 if no statusCode set
    err.statusCode = err.statusCode || 500;

    // If the error is NOT operational → it's a developer/programmer error
    if (!err.isOperational) {
        console.log("Programmer error:", err);

        // Don't expose internal error details to the client
        return res.status(500).json({
            success: false,
            message: "Internal server error !!"
        });

        // Crash the server after sending response
        process.exit(1);
    }

    // Operational error → safe to send to the client
    return res.status(err.statusCode).json({
        success: false,
        message: err.message,       // User-friendly message
        errors: err.errors || []    // Extra validation errors if available
    });
};
