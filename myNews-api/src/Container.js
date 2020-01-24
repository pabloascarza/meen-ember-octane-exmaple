const awilix = require('awilix');
const fetchArticles = require('./Application/UseCases/Article/fetchArticles');
const fetchArticle = require('./Application/UseCases/Article/fetchArticle');
const ArticleRepository = require('./Infrastructure/Repositories/Article/ArticleRepository');
const presentArticles = require('./Infrastructure/Presenters/Article/restSerializerArticle');
const articleMongoAdapter = require('./Infrastructure/Adapters/Article/articleMongo');

const container = awilix.createContainer({
	  injectionMode: awilix.InjectionMode.PROXY
});
container.register({
	  fetchArticles: awilix.asFunction(fetchArticles)
});
container.register({
	  fetchArticle: awilix.asFunction(fetchArticle)
});
container.register({
	  articleRepository: awilix.asClass(ArticleRepository, {lifetime: awilix.Lifetime.SINGLETON})
});
container.register({
	  presentArticles: awilix.asFunction(presentArticles)
});
container.register({
	articleMongoAdapter: awilix.asFunction(articleMongoAdapter)
});
module.exports = container;
