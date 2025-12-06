class ApiResponse {
    // This class is used to send consistent, structured success responses
    // Benefit → Keeps API output clean, predictable, and easy to consume on frontend

    constructor(
        statusCode, // The HTTP status code (200, 201, 204, etc.)
        data,       // The actual data we want to send back (object, array, etc.)
        message     // Short message describing the response
    ) {

        this.statusCode = statusCode;
        // Store the HTTP status code  
        // Benefit → Frontend and API handlers can easily check response type
        this.data = data;
        // Store the main response data  
        // Benefit → Keeps success responses consistent across the project
        this.message = message;
        // Store a friendly message for the client  
        // Example → "Movie created successfully"
        this.success = statusCode < 400;
        // Automatically determine if response is success  
        // Any status < 400 is considered success (200–399)
        // Benefit → Frontend can check response.success instead of checking status codes
    }
}

export { ApiResponse }
// Export the class so controllers/services can use it for consistent success responses
