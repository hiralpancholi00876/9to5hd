const { checkApiKey, validateJoi } = require('../../middleware/headerValidator');
const mainModel = require('../../models/v1/main.model');
const { Router } = require('express');
const router = Router();
const Joi = require('joi');

router.post('/posts/add', checkApiKey, validateJoi(Joi.object({
    slug: Joi.string().trim().min(3).max(255).pattern(/^[a-z0-9-]+$/).required(),
    post_title: Joi.string().trim().min(3).max(255).required(),
    title: Joi.string().trim().min(3).max(255).optional(),
    poster: Joi.string().uri().optional(),
    rating: Joi.number().min(0).max(10).optional(),
    plot: Joi.string().trim().allow('').optional(),
    language: Joi.array().items(Joi.string().trim()).optional(),
    genre: Joi.string().trim().required(),
    release_date: Joi.date().iso().required(),
    country: Joi.string().trim().required(),
    keywords: Joi.array().items(Joi.string().trim()).required(),
    post_type: Joi.string().trim().required(),
    imdb_id: Joi.string().trim().required(),
    tmdb_id: Joi.string().trim().required(),
    seasons_number: Joi.number().integer().min(0).default(0),
    total_episodes: Joi.number().integer().min(0).default(0),
    is_featured: Joi.boolean().default(false),
    is_active: Joi.boolean().default(false),
})), mainModel.addPost);

router.get('/posts', checkApiKey, mainModel.getPosts);

router.post('/posts/update/:id', checkApiKey, validateJoi(Joi.object({
    slug: Joi.string().trim().min(3).max(255).pattern(/^[a-z0-9-]+$/).required(),
    post_title: Joi.string().trim().min(3).max(255).required(),
    title: Joi.string().trim().min(3).max(255).optional(),
    poster: Joi.string().uri().optional(),
    rating: Joi.number().min(0).max(10).optional(),
    plot: Joi.string().trim().allow('').optional(),
    language: Joi.string().trim().optional(),
    genre: Joi.array().items(Joi.string().trim()).optional(),
    release_date: Joi.date().iso().required(),
    country: Joi.string().trim().required(),
    keywords: Joi.array().items(Joi.string().trim()).required(),
    post_type: Joi.string().trim().required(),
    imdb_id: Joi.string().trim().required(),
    tmdb_id: Joi.string().trim().required(),
    seasons_number: Joi.number().integer().min(0).default(0),
    total_episodes: Joi.number().integer().min(0).default(0),
    is_featured: Joi.boolean().default(false),
    is_active: Joi.boolean().default(false),
})), mainModel.updatePost);

router.post('/posts/delete-inactive/:id', checkApiKey, validateJoi(Joi.object({
    type: Joi.string().valid('delete', 'is_active').required(),
    is_bool: Joi.boolean().required()
})), mainModel.deleteOrIsActivePost);

router.get('/posts/:id', checkApiKey, mainModel.getPostById);

router.post('/posts/search', checkApiKey, validateJoi(Joi.object({
    search: Joi.string().trim().min(3).max(255).required(),
})), mainModel.IsActiveCategory);

router.get('/categories', checkApiKey, mainModel.getCategory);

router.post('/categories/add', checkApiKey, validateJoi(Joi.object({
    name: Joi.string().trim().min(3).max(255).required(),
    description: Joi.string().trim().allow('').optional(),
})), mainModel.addCategory);

router.post('/categories/update/:id', checkApiKey, validateJoi(Joi.object({
    name: Joi.string().trim().min(3).max(255).required(),
    description: Joi.string().trim().allow('').optional(),
})), mainModel.updateCategory);

router.post('/categories/inactive/:id', checkApiKey, validateJoi(Joi.object({
    is_bool: Joi.boolean().required()
})), mainModel.IsActiveCategory);

module.exports = router;