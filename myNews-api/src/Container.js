const awilix = require('awilix');
const fetchArticles = require('./Application/UseCases/Article/fetchArticles');
const fetchArticle = require('./Application/UseCases/Article/fetchArticle');
const ArticleRepository = require('./Infrastrucure/Repositories/Article/ArticleRepository');
const presentArticles = require('./Infrastrucure/Presenters/Article/restSerializerArticle');

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
module.exports = container;
