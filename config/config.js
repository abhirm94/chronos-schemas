require('dotenv').config()

var db = {
    DATABASE_HOST: process.env.DATABASE_HOST || '167.71.236.110',
    DATABASE_NAME: process.env.DATABASE_NAME || 'db',
    DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'dbuser',
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || 'eatsleepcode',
    DATABASE_PORT: process.env.DATABASE_PORT || 5432,
    DATABASE_DIALECT: 'postgres', 
    NODE_ENV: process.env.NODE_ENV || 'development',
    SCHEMA: "public",
}

var config = {
    db: {
        env: db
    }
}

module.exports = config
