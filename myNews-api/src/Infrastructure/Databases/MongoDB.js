const mongoose = require('mongoose');

const server = '127.0.0.1:27017';
const database = 'articles';

class Database {
  constructor() {
    this.connect();
  }
  
  connect() {
    mongoose.connect(`mongodb://${server}/${database}`, { useNewUrlParser: true, useUnifiedTopology: true });
  }
}

module.exports = new Database();