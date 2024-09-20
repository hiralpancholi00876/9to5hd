const common = require('../utils/common.js');

// Function to validate API key of header (Note : Header keys are encrypted)
const checkApiKey = function (req, res, next) {
    if (req.headers['api-key'] === process.env.API_KEY) {
        next();
    } else {
        res.status(401).json({
            code: '0',
            message: 'Invalid API key'
        });
    }
}

// Middleware function for validation
const validateJoi = (schema) => {
    return (req, res, next) => {

        const options = {
            errors: {
                wrap: {
                    label: false
                }
            }
        };

        const { error } = schema.validate(req.body, options);

        if (error) {
            return res.status(200).json({ code: 0, message: error.details[0].message });
        }

        next();
    };
}

module.exports = {
    checkApiKey,
    validateJoi
};