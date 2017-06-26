'use strict';
var app = app || {};

(function(module) {
  const articleController = {};
  articleController.fetchArticles = () => {
    app.Articles.fetchAll(app.articlesView.initIndexPage);
  };


  module.articleController = articleController;
})(app);
