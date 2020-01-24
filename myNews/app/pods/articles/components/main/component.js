import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { task } from 'ember-concurrency';
import { next } from '@ember/runloop';

export default class MainComponent extends Component {
  @tracked _article = null;	

  constructor() {
    super(...arguments);
    this.fetchArticle.perform();
  }

  @(task(function*() {
    let id = this.args.articleId;
    let request = yield fetch(`http://localhost:4000/articles/${id}`);
    let json = yield request.json();
    this._article = json.articles;
  }).drop()) fetchArticle;

  get article () {
    if (this._article && this._article.id === this.args.articleId) {
      return this._article;
    }
    next(() => {
      this.fetchArticle.perform();
    });
    return this._article;
  }
}
