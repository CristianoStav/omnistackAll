const express = require('express'),
    routes = express.Router(),
    multer = require('multer'),
    multerConfig = require('./config/multer');

const BoxController = require('./controllers/Box');
const FileController = require('./controllers/File');

routes.post('/boxes', BoxController.store);
routes.post('/boxes/:id/files', multer(multerConfig).single('file'), FileController.store);
routes.get('/boxes/:id', BoxController.show);

module.exports = routes;

//5cae7639c6559109f00e6bb9