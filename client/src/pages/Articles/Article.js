import React, { Component } from "react";
import API from "../../utils/API";
import axios from 'axios';

const apiKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?max=5&api-key=" +
  apiKey + "&q=";


class Article extends Component {
  state = {
    articles:[],
    result:{},
    topic: "",
    startYear: "",
    endYear: "",
  };

  findArticles = (query) => {
    const search = queryURL + query;
    return axios.get(search)
  };

  //Render function
  render() {
    return (

    );
  }
}

export default Article;
