module.exports = class Article {
	  constructor(id, title, fullText, summary, relatedArticleId) {
		      this.id = id;    
		      this.title = title;
		      this.fullText = fullText;
		      this.summary = summary;
		      this.relatedArticleId = relatedArticleId
		    }
	  toJsonObject () {
		      const {id, title, fullText, summary, relatedArticleId} = this;
		      return {id, title, fullText, summary, relatedArticleId};
		    }
}
