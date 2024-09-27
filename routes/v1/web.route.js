const { checkApiKey, validateJoi } = require('../../middleware/headerValidator');
const webModel = require('../../models/v1/web.model');
const { Router } = require('express');
const router = Router();
const Joi = require('joi');


router.post('/homepagelisting', checkApiKey, validateJoi(Joi.object({
    genre: Joi.string().trim().optional(),
})), webModel.getHomePageList);

router.post('/searchposts', checkApiKey, validateJoi(Joi.object({
    search: Joi.string().trim().min(3).required(),
})), webModel.searchPosts);

router.post('/postdetails', checkApiKey, validateJoi(Joi.object({
    slug: Joi.string().trim().required(),
})), webModel.postDetails);


module.exports = router;