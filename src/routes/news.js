const express = require("express");

const axios = require("axios");

const api = require(__dirname + "/api.js");

const newsRouter = express.Router();

newsRouter.get('', async(req, res) => {
    try {
        const url = "http://newsapi.org/v2/top-headlines?country=in&apiKey=";
        const apiKey = api.getApi();
        const newsAPI = await axios.get(`${url}${apiKey}`);
        res.render('news', { articles : newsAPI.data.articles });
    } catch (err) {
        if(err.response) {
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
            res.render('error', { articles : null });
        } else if(err.requiest) {
            res.render('error', { articles : null });
            console.log(err.requiest);
        } else {
            res.render('error', { articles : null });
            console.error('Error', err.message);
        }
    }
});

newsRouter.post('', async(req, res) => {
    let search = req.body.search;

    try {
        const url = "http://newsapi.org/v2/everything?q=${search}&apiKey=";
        const apiKey = api.getApi();
        const newsAPI = await axios.get(`${url}${apiKey}`);
        res.render('searchNews', { articles : newsAPI.data.articles });
    } catch (err) {
        if(err.response) {
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
            res.render('error', { articles : null });
        } else if(err.requiest) {
            res.render('error', { articles : null });
            console.log(err.requiest);
        } else {
            res.render('error', { articles : null });
            console.error('Error', err.message);
        }
    }
});

module.exports = newsRouter;
