export default function() {
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = '/api';    // make this `/api`, for example, if your API is namespaced
  this.timing = 1000;         // delay for each request, automatically set to 0 during testing
	
  this.get('/articles', (schema, request) => {
    return schema.articles.all();
  });
  this.get('/articles/:id', (schema, request) => {
    let id = request.params.id;

    return schema.articles.find(id);
  });

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */
}
