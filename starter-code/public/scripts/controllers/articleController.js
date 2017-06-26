'use strict';
var app = app || {};

(function(module) {
  const articleController = {};
  articleController.fetchArticles = () => {
    app.Articles.fetchAll(app.articleView.initIndexPage);
  };


  module.articleController = articleController;
})(app);
