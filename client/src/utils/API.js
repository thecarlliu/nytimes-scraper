import axios from "axios";
const apiKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
  apiKey + "&q=";

export default {

  getAll: function() {
    return axios.get("/api/articles");
  },
  search: function(query){
    console.log(queryURL+query);
    return axios.get("/api/articles/", {params: {q:query}})
  },
  delete: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  save: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};
