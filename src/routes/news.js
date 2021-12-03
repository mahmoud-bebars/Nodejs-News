const express = require("express");
require("dotenv").config();
const axios = require("axios").default;
const Router = express.Router();

APIKEY = process.env.NEWS_API_KEY;

Router.get("", async (req, res) => {
  try {
    const newsAPI = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=9c08be690efe4d41873c1d3bfae2ff47`
    );
    const data = newsAPI.data.articles;
    // console.log(data);
    res.render("news", { articles: data });
  } catch (error) {
    if (error.response) {
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    } else if (err.request) {
      console.log(err.request);
    } else {
      console.error("Error", error.message);
    }
  }
});

Router.post("/", async (req, res) => {
  let search = req.body.search;

  try {
    const newsAPI = await axios.get(
      `https://newsapi.org/v2/everything?from=2021-09-02&sortBy=popularity&apiKey=9c08be690efe4d41873c1d3bfae2ff47&q=${search}`
    );
    const data = newsAPI.data.articles;
    // console.log(search);
    // console.log(data);
    res.render("newsSearch", { articles: data });
  } catch (error) {
    if (error.response) {
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    } else if (err.request) {
      console.log(err.request);
    } else {
      console.error("Error", error.message);
    }
  }
});

module.exports = Router;
