'use strict';
var app = app || {};

// TODO: Configure routes for this app with page.js, by registering each URL your app can handle, linked to a a single controller function to handle it. Note that these routes do not need to wrapped in an IIFE.
page('/', app.aboutController.about);
page('articles', app.articleController.fetchArticles);
page();
