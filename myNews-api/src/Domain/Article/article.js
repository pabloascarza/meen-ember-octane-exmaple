module.exports = class Article {
	  constructor(id, title, fullText, summary, relatedArticle) {
		      this.id = id;    
		      this.title = title;
		      this.fullText = fullText;
		      this.summary = summary;
		      this.relatedArticle = relatedArticle
		    }
	  toJsonObject (includeRelationship = true) {
		      const {id, title, fullText, summary} = this;
		      const attr = {id, title, fullText, summary};
		      const rel = {relatedArticle: null}
		      if (this.relatedArticle && includeRelationship) {
			            rel.relatedArticle = this.relatedArticle.toJsonObject(false);
			          }
		      return {...attr, ...rel};
		    }
}
