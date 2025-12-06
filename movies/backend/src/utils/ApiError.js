class ApiError extends Error {  
    // This class extends the built-in Error class  
    // We create custom errors so our API can send clean, structured error responses  
    // Benefit -> helps us control how errors look, behave, and propagate  

    constructor(
        statusCode,                 // The HTTP status code (400, 404, 500, etc.)
        message = "Something went wrong",  // Default message if none is provided
        isOperational = true,       // Tells if the error is "expected" (operational) or a "bug"
        errors = [],                // For storing multiple validation errors (example: mongoose)
        stack = "",                 // Optional stack trace for debugging
    ) {
        super(message);  
        // Calls parent Error class constructor  
        // Required because ApiError is extending Error  
        // Benefit -> ensures standard error properties exist (message, stack)

        this.statusCode = statusCode;     // Store status code
        this.message = message;           // Store error message
        this.isOperational = isOperational;  
        // Operational errors = things we expect (wrong input, not found, etc.)
        // Non-operational errors = bugs or crashes  
        // Benefit -> helps global error handler decide how to handle the error safely

        this.errors = errors;  
        // Stores an array of extra error details  
        // Benefit -> useful for validation errors, form errors, etc.

        if (stack) {  
            // If a stack trace is manually provided  
            this.stack = stack  
        } else {  
            // Automatically capture stack trace for debugging  
            Error.captureStackTrace(this, this.constructor)
            // Benefit -> cleaner stack trace without internal function calls  
        }
    }
}

export { ApiError }    // = Exporting class so other files can use it
