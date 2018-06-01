module.exports = {
    secretKey: process.env.SECRET_KEY || 'default secret key',
    uriMongo: process.env.URI_MONGO || 'mongodb://localhost/tut-heroku-node-mongo'
}
