import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { task } from 'ember-concurrency';
export default class MainComponent extends Component {
  @tracked articles = [];                                                                                       
  
  constructor() {
    super(...arguments);
    this.fetchArticles.perform();
  }
	  
  @(task(function*() {
    let request = yield fetch('http://localhost:4200/api/articles/');
    let json = yield request.json();
    this.articles = json.articles;
  }).restartable()) fetchArticles;
}
