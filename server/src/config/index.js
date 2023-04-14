const dotenv = require('dotenv');
dotenv.config();

const env = process.env.NODE_ENV || "development";

const configs = {
    base: {
        env,

        // Application
        name: process.env.APP_NAME || "SERVICE_MANAGEMENT",
        host: process.env.HTTP_HOST || "127.0.0.1",
        port: process.env.HTTP_PORT || 8080,

        //Image
        product_images_url: process.env.PRODUCT_IMAGES_URL || "./src/images/",

        // Database
        db_host: process.env.DB_HOST || "127.0.0.1",
        db_port: process.env.DB_PORT || 27017,
        db_dialect: process.env.DB_DIALECT || "mongodb",
        db_database: process.env.DB_DATABASE || 'service_management',

        // Security
        token_secret: process.env.TOKEN_SECRET || "DAVIDMARTINEZ",
        token_expiry: process.env.TOKEN_EXPIRY || "3d",

        // Paging
        default_index_paging: process.env.DEFAULT_INDEX_PAGING || 1,
        default_size_paging: process.env.DEFAULT_SIZE_PAGING || 5,
    },
    development: {
    },
    localhost: {
    },
};

const config = {
    ...configs["base"],
    ...configs[env]
}

module.exports = config;
