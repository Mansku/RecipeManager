var Home = require("../models/home");

exports.index = function(req, res) {
  res.send("NOT IMPLEMENTED YET: Site home/news page");
};

// Display list of all News.
exports.news_list = function(req, res) {
  res.send("NOT IMPLEMENTED: News list");
};

// Display detail page for a specific News.
exports.news_detail = function(req, res) {
  res.send("NOT IMPLEMENTED: News detail: " + req.params.id);
};

// Display News create form on GET.
exports.news_create_get = function(req, res) {
  res.send("NOT IMPLEMENTED: News create GET");
};

// Handle News create on POST.
exports.news_create_post = function(req, res) {
  res.send("NOT IMPLEMENTED: News create POST");
};

// Display News delete form on GET.
exports.news_delete_get = function(req, res) {
  res.send("NOT IMPLEMENTED: News delete GET");
};

// Handle News delete on POST.
exports.news_delete_post = function(req, res) {
  res.send("NOT IMPLEMENTED: News delete POST");
};

// DisplayNewsr update form on GET.
exports.news_update_get = function(req, res) {
  res.send("NOT IMPLEMENTED: News update GET");
};

// Handle News update on POST.
exports.news_update_post = function(req, res) {
  res.send("NOT IMPLEMENTED: News update POST");
};
