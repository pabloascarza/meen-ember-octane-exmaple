const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Article = new Schema({
    title: {
        type: String
    },
    fullText: {
        type: String
    },
    summary: {
        type: String
    },
    relatedArticleId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Article'
    }
});

module.exports = mongoose.model('Article', Article);
