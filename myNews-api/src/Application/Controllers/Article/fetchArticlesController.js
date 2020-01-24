const container = require('../../../Container');

module.exports = async function fetchArticlesController (req, res) {
	  const fetchArticles = await container.resolve('fetchArticles');
	  const articles = await fetchArticles();
	  const presentArticles = container.resolve('presentArticles');
	  const jsonArticles = presentArticles(articles);
	  res.status(200).json(jsonArticles);
}
