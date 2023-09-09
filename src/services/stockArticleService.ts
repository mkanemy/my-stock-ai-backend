import { Response } from "express";

export function getRecentNewsArticles(ticker: String, res: Response) { 
    const superagent = require('superagent');

    superagent.get('https://newsdata.io/api/1/news?apikey=' + process.env.NEWS_API_KEY + '&q=APPLE%20INC%20APPL%20Stock')// + process.env.newsApiKey)
    .end((err: any, response: any) => {
        if (err) { return console.log(response); }

        let arr = ['']

        arr.pop()

        JSON.parse(response?.text)?.results.forEach((element: any) => {
            arr.push(element?.link)
        });

        res.json(
            {"data": JSON.parse(response?.text)?.results,
            "urls":arr});
    });
}