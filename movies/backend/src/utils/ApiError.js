class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        isOperational = true,
        errors = [],
        stack = "",
    ) {
        super(message);

        this.statusCode = statusCode;
        this.message = message;
        this.isOperational = isOperational;
        this.errors = errors;

        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export { ApiError }