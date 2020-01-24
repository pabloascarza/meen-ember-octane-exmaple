const dbInstance = require('../MongoDB');
const ArticleModel = require('../../Models/Article/Article');


const art1 = new ArticleModel({ title: 'title', fullText: 'fullText', summary: 'summary'});
art1.save().then((art1S) => {
    const art2 = new ArticleModel({ title: 'title2', fullText: 'fullText2', summary: 'summary2', relatedArticleId: art1S._id});
    console.log('art1', art1S);
    art2.save().then((art2S) => {
        const art3 = new ArticleModel({ title: 'title2', fullText: 'fullText2', summary: 'summary2', relatedArticleId: art2S._id});
        console.log('art2', art2S);
        art3.save().then((art3S) => {
            console.log('art2', art3S);
            process.exit();
        });
    });
});