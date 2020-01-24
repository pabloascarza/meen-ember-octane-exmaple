module.exports = function makeFetchArticle ({articleRepository}) {
	  return async function fetchArticle (articleId) {
		      const article= await articleRepository.findbyId(articleId);
		      return article;
		    }
};
