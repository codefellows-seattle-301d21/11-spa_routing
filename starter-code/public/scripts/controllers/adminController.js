'use strict';
var app = app || {};

(function(module) {
  const adminController = {};

  adminController.showPage = () => {
    $('main > section').hide();
    $('#blog-stats').show();

    if (app.Article.all.length === 0) {
      app.Article.fetchAll(app.adminView.initAdminPage);
    } else {
      app.adminView.initAdminPage();
    }
  }

  module.adminController = adminController;
})(app);
