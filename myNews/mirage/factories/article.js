import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  title(i) {
    return `Article title ${i}`;
  },

  fullText() {
    return faker.lorem.paragraph();
  },

  summary() {
    return faker.lorem.sentence();
  },

  relatedArticleId(i) {
    return Math.ceil(Math.random() * (10 - i));
  },
});
