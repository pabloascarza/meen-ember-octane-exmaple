const container = require('../../../Container');

module.exports = async function fetchArticleController (req, res) {
	  const fetchArticle = await container.resolve('fetchArticle');
	  const article = await fetchArticle(req.params.id);
	  const presentArticles = container.resolve('presentArticles');
	  const jsonArticle = presentArticles(article);
	  res.status(200).json(jsonArticle);
}
