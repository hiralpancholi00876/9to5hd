const axios = require('axios');
const moment = require('moment');
// const cheerio = require('cheerio');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const addPost = async (req, res) => {
    try {
        let { body } = req;
        const post = await prisma.tbl_posts.create({
            data: {
                slug: body.slug,
                post_title: body.post_title,
                title: body.title,
                poster: body.poster,
                rating: Number(body.rating),
                plot: body.plot,
                language: body.language,
                genre: body?.genre?.split(','),
                release_date: new Date(body.release_date),
                country: body.country,
                keywords: body?.keywords.split(','),
                post_type: body.post_type,
                views_count: 0,
                imdb_id: body.imdb_id,
                tmdb_id: body.tmdb_id,
                seasons_number: Number(body.seasons_number),
                total_episodes: Number(body.total_episodes),
                is_featured: body.is_featured || false,
                is_active: body.is_active || false,
                is_delete: false,
                created_at: new Date(),
                updated_at: new Date()
            }
        });

        return res.status(200).json({
            status: true,
            message: 'Post added successfully',
            data: post
        });
    }
    catch (e) {
        return res.status(200).json({
            status: false,
            message: (e?.code == 'P2002') ? "Unique constraint Slug" : 'Something went wrong'
        });
    }
};

const getPosts = async (req, res) => {
    try {
        const posts = await prisma.tbl_posts.findMany({
            select: {
                id: true,
                slug: true,
                post_title: true,
                title: true,
                poster: true,
                rating: true,
                release_date: true,
                is_active: true,
                is_delete: true,
                created_at: true,
            },
            where: {
                is_delete: false
            }
        });

        return res.status(200).json({
            status: true,
            message: 'Posts fetched successfully',
            data: posts
        });
    }
    catch (e) {
        return res.status(200).json({
            status: false,
            message: 'Something went wrong'
        });
    }
}

const getPostById = async (req, res) => {
    try {
        let { params } = req;

        const post = await prisma.tbl_posts.findFirst({
            where: {
                id: Number(params.id),
                is_delete: false
            }
        });

        if (!post) {
            return res.status(200).json({
                status: null,
                message: 'Post not found'
            });
        } else {
            post.release_date = moment(post.release_date).format('YYYY-MM-DD');
            return res.status(200).json({
                status: true,
                message: 'Post fetched successfully',
                data: post
            });
        }
    }
    catch (e) {
        return res.status(200).json({
            status: false,
            message: 'Something went wrong'
        });
    }
}

const updatePost = async (req, res) => {
    try {
        let { body, params } = req;
        const post = await prisma.tbl_posts.update({
            where: {
                id: Number(params?.id),
            },
            data: {
                slug: body.slug,
                post_title: body.post_title,
                title: body.title,
                poster: body.poster,
                rating: Number(body.rating),
                plot: body.plot,
                language: body.language,
                genre: body?.genre?.split(','),
                release_date: body.release_date ? new Date(body.release_date) : null,
                country: body.country,
                keywords: body?.keywords.split(','),
                post_type: body.post_type,
                imdb_id: body.imdb_id,
                tmdb_id: body.tmdb_id,
                seasons_number:  Number(body.seasons_number),
                total_episodes: Number(body.total_episodes),
                is_featured: body.is_featured || false,
                is_active: body.is_active || false,
            }
        });

        return res.status(200).json({
            status: true,
            message: 'Post updated successfully',
            data: post
        });
    }
    catch (e) {
        return res.status(200).json({
            status: false,
            message: 'Something went wrong'
        });
    }
}

const deleteOrIsActivePost = async (req, res) => {
    try {
        let { type, is_bool } = req.body;

        let data = { 'is_active': is_bool };
        if (type == 'delete') {
            data = { 'is_delete': is_bool };
        }

        const post = await prisma.tbl_posts.update({
            where: {
                id: Number(req?.params?.id),
            },
            data: data
        });

        if(!post) {
            return res.status(200).json({
                status: null,
                message: 'Post not found'
            });
        }else{
            return res.status(200).json({
                status: true,
                message: 'Post updated successfully',
                data: post
            });
        }
    }
    catch (e) {
        return res.status(200).json({
            status: false,
            message: 'Something went wrong'
        });
    }
}

const getCategory = async (req, res) => {
    try {
        const categories = await prisma.tbl_categories.findMany();

        if (categories.length == 0) {
            return res.status(200).json({
                status: null,
                message: 'Categories not found'
            });
        }else{
            return res.status(200).json({
                status: true,
                message: 'Categories fetched successfully',
                data: categories
            });
        }
    }
    catch (e) {
        return res.status(200).json({
            status: false,
            message: 'Something went wrong'
        });
    }
}

const addCategory = async (req, res) => {
    try {
        let { body } = req;

        const category = await prisma.tbl_categories.create({
            data: {
                name: body.name,
                description: body.description,
                is_active: body.is_active || true,
                created_at: new Date()
            }
        });

        return res.status(200).json({
            status: true,
            message: 'Category added successfully',
            data: category
        });
    }
    catch (e) {
        if(e?.code == 'P2002'){
            return res.status(200).json({
                status: null,
                message: 'Category already exists'
            });
        }else{
            return res.status(200).json({
                status: false,
                message: 'Something went wrong'
            });
        }
    }
}

const updateCategory = async (req, res) => {
    try {
        let { body, params } = req;

        const category = await prisma.tbl_categories.update({
            where: {
                id: Number(params?.id),
            },
            data: {
                name: body.name,
                description: body.description,
                is_active: body.is_active || true
            }
        });

        return res.status(200).json({
            status: true,
            message: 'Category updated successfully',
            data: category
        });
    }
    catch (e) {
        return res.status(200).json({
            status: false,
            message: 'Something went wrong'
        });
    }
}

const IsActiveCategory = async (req, res) => {
    try {
        let { is_bool } = req.body;

        const category = await prisma.tbl_categories.update({
            where: {
                id: Number(req?.params?.id),
            },
            data: {
                is_active: is_bool || true
            }
        });

        if(!category) {
            return res.status(200).json({
                status: null,
                message: 'Category not found'
            });
        }else{
            return res.status(200).json({
                status: true,
                message: 'Category updated successfully',
                data: category
            });
        }
    }
    catch (e) {
        return res.status(200).json({
            status: false,
            message: 'Something went wrong'
        });
    }
}

const byPassMethod = async(req, res) => {
    try {
        const axios = require('axios');

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://wrgypyespopdc7eg5h4msflj240qkpdn.lambda-url.ap-south-1.on.aws/',
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                return res.status(200).json({
                    status: true,
                    message: 'Success',
                    data: response.data
                });
            })
            .catch((error) => {
                return res.status(200).json({
                    status: false,
                    message: 'Something went wrong'
                });
            });



        
    } catch (e) {
        return res.status(200).json({
            status: false,
            message: 'Something went wrong'
        });
    }
}

module.exports = {
    addPost,
    getPosts,
    getPostById,
    updatePost,
    deleteOrIsActivePost,

    getCategory,
    addCategory,
    updateCategory,
    IsActiveCategory,

    byPassMethod
};