const container = require('../Container');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { decorateRouter, addAsync } = require('@awaitjs/express');
const fetchArticlesController = require('./Controllers/Article/fetchArticlesController');
const fetchArticleController = require('./Controllers/Article/fetchArticleController');
const dbInstance = require('../Infrastructure/Databases/MongoDB');

module.exports = class App {
	  constructor() {
		      this.server = addAsync(express());
		      this.setupMiddlewares();
			  this.setupRoutes();
			  this.dbInstance = dbInstance;
		    }
	  setupMiddlewares() {
		      this.server.use(cors());
		      this.server.use(bodyParser.json());
		    }
	  setupRoutes() {
		      const router = decorateRouter(express.Router());
		      router.getAsync('/articles', fetchArticlesController);
		      router.getAsync('/articles/:id', fetchArticleController);
		      this.server.use('/', router);
		    }
}
