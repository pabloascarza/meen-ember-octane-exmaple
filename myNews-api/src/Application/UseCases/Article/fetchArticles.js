module.exports = function makeFetchArticles ({articleRepository}) {
	  return async function fetchArticles () {
		      const articles = await articleRepository.findAll();
		      return articles;
		    }
};
