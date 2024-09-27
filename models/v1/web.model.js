const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getHomePageList = async (req, res) => {
    try {

        const { body } = req;

        const lists = await prisma.tbl_posts.findMany({
            select: {
                id: true,
                slug: true,
                post_title: true,
                title: true,
                poster: true,
                post_type: true,
                release_date: true,
                is_active: true,
                is_delete: true,
                created_at: true,
            },
            where: {
                is_delete: false,
                ...(body.genre == undefined ? {} : { genre : { array_contains: [body?.genre] }})
            }
        });

        return res.status(200).json({
            status: true,
            message: 'movies fetched successfully',
            data: lists
        });
    }
    catch (e) {
        console.log(e)
        return res.status(200).json({
            status: false,
            message: 'Something went wrong'
        });
    }
}

const searchPosts = async (req, res) => {
    try {

        const { body } = req;

        const lists = await prisma.tbl_posts.findMany({
            select: {
                id: true,
                slug: true,
                post_title: true,
                title: true,
                poster: true,
                release_date: true,
                is_active: true,
                is_delete: true,
                created_at: true,
            },
            where: {
                post_title: { contains: body?.search },
                is_delete: false
            }
        });

        if (!lists) {
            return res.status(200).json({
                status: null,
                message: 'movie not found'
            });
        } else {
            return res.status(200).json({
                status: true,
                message: 'movies fetched successfully',
                data: lists
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

const postDetails = async (req, res) => {
    try {

        const { body } = req;

        const lists = await prisma.tbl_posts.findFirst({
            where: {
                slug: body?.slug,
                is_delete: false
            }
        });

        if (!lists) {
            return res.status(200).json({
                status: null,
                message: 'movie not found'
            });
        } else {
            return res.status(200).json({
                status: true,
                message: 'movies fetched successfully',
                data: lists
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

module.exports = {
    getHomePageList,
    searchPosts,
    postDetails
};