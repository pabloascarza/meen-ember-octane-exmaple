const ArticleModel = require('../../Models/Article/Article');
module.exports = class ArticleRepository {
  constructor({articleMongoAdapter}) {
      this.adapter = articleMongoAdapter;
  }
  
  findAll() {
    return ArticleModel.find()
    .then(docArticles => {
      return docArticles.map(docItem => this.adapter(docItem));
    });
  }

  findbyId (id) {
    return ArticleModel.findById(id)
    .then(docArticle => {
      return this.adapter(docArticle);
    });
  }
}