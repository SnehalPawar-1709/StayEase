const Joi = require("joi");

const listingSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().allow("", null),
    image: Joi.string().allow("", null),
    price: Joi.number().min(0).allow(null),
    location: Joi.string().allow("", null),
    country: Joi.string().allow("", null)
});

const reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required()
    }).required()
});

module.exports = { listingSchema, reviewSchema };
