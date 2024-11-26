const Joi = require('joi');

const createInstanceSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    // other fields and validation rules
});

module.exports = {
    createInstance: (req, res, next) => {
        const { error } = createInstanceSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message});
        }
        next();
    },
};