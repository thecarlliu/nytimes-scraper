const db = require("../models");
const axios = require("axios");
const apiKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
  apiKey + "&q=";

module.exports = {

  findAll: function(req, res) {
    db.Article
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
  },
  findById: function(req, res) {
    db.Article
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel));
  },
  create: function(req, res) {
      db.Article.create(req.body)
  },
  update: function(req, res) {
    db.Article
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel));
  },
  remove: function(req, res) {
    db.Article
      .remove({ _id: req.params.id })
      .then(dbModel => res.json(dbModel));
  },
  searchAll: function (req, res) {
    console.log(req);
    axios
      .get(queryURL, { params: req.query })
      .then(({ data: { results } })=> res.json(results));
  }
};
