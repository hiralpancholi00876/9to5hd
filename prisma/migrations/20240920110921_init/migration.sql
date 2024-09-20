-- CreateTable
CREATE TABLE "tbl_posts" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "post_title" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "poster" TEXT,
    "rating" DOUBLE PRECISION,
    "plot" TEXT,
    "language" JSONB,
    "genre" JSONB,
    "release_date" TIMESTAMP(3),
    "country" TEXT,
    "category" TEXT,
    "keywords" JSONB,
    "post_type" VARCHAR(10) NOT NULL DEFAULT 'movie',
    "views_count" INTEGER NOT NULL DEFAULT 0,
    "imdb_id" TEXT,
    "tmdb_id" TEXT,
    "seasons_number" INTEGER NOT NULL DEFAULT 1,
    "total_episodes" INTEGER NOT NULL DEFAULT 0,
    "is_featured" BOOLEAN NOT NULL DEFAULT false,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "is_delete" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tbl_posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbl_categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbl_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbl_posts_categories" (
    "id" SERIAL NOT NULL,
    "category_id" INTEGER NOT NULL,
    "post_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbl_posts_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbl_dl_links" (
    "id" SERIAL NOT NULL,
    "post_id" INTEGER NOT NULL,
    "button_name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "is_stream" BOOLEAN NOT NULL DEFAULT false,
    "is_telegram" BOOLEAN NOT NULL DEFAULT false,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "is_delete" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tbl_dl_links_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tbl_posts_slug_key" ON "tbl_posts"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_categories_name_key" ON "tbl_categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_dl_links_button_name_key" ON "tbl_dl_links"("button_name");

-- AddForeignKey
ALTER TABLE "tbl_posts_categories" ADD CONSTRAINT "tbl_posts_categories_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "tbl_posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_posts_categories" ADD CONSTRAINT "tbl_posts_categories_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "tbl_categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_dl_links" ADD CONSTRAINT "tbl_dl_links_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "tbl_posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
