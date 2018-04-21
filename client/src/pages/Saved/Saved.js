import React, { Component } from "react";
import API from "../../utils/API";

class Saved extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    this.setArticles()
  }

  setArticles = () => {
    API.getAll().then((res) => this.setState({ articles: res.data}));
  };

  delete = id => {
    API.delete(id).then((res) => this.setArticles());
  };

  render() {
    return (

    )
  }
}

export default Saved;
