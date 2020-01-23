const Article = require('../../../Domain/Article/article');

module.exports = function makeArticleMongoAdapterfunction () {
  return function articleMongoAdapter (articleDoc) {
    return new Article(articleDoc._id, articleDoc.title, articleDoc.fullText, articleDoc.summary, articleDoc.relatedArticle);
  }
};