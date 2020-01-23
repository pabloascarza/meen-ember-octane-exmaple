const Article = require('../../../Domain/Article/article');
module.exports = class ArticleRepository {
	  constructor() {
		      const article1 = new Article('1', 'title1', 'fullText1', 'summary1', null);
		      const article2 = new Article('2', 'title2', 'fullText2', 'summary2', article1);
		      const article3 = new Article('3', 'title3', 'fullText3', 'summary3', article2);
		      this.articles = [article1, article2, article3];
		    }
	  
	  findAll() {
		      return Promise.resolve(this.articles);
		    }
	  findbyId (id) {
		      return Promise.resolve(
			            this.articles.find(element => element.id === id));
		    }
}
