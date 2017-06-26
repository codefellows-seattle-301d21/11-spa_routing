'use strict';
var app = app || {};

(function(module) {
  const adminController = {};

  adminController.showPage = () => {
    $('main > section').hide();
    $('#blog-stats').show();
  }

  module.adminController = adminController;
})(app);
