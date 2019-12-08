import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { task } from 'ember-concurrency';

export default class MainComponent extends Component {
  @tracked _article = null;

  constructor() {
    super(...arguments);
    this.fetchArticle.perform();
  }

  @(task(function*() {
    let id = this.args.articleId;
    let request = yield fetch(`http://localhost:4200/api/articles/${id}`);
    let json = yield request.json();
    this._article = json.articles;
  }).restartable()) fetchArticle;

  get article () {
    if (this._article && this._article.id === this.args.articleId) {
      return this._article;
    }
    this.fetchArticle.perform();
    return null;
  }
}
