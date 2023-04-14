const httpStatus = require('http-status');

class APIError extends Error {
    /**
     * Creates an API error.
     * @param {string} message - Error message.
     * @param {number} status - HTTP status code of error.
     */
    constructor({
      message,
      errors,
      stack,
      status = httpStatus.INTERNAL_SERVER_ERROR,
    }) 
    {
        super(message);
        this.errors = errors;
        this.stack = stack;
        this.status = status;
    }
}

module.exports = APIError;