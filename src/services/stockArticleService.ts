import { Response } from "express";

export function getRecentNewsArticles(ticker: String, res: Response) { 
    const superagent = require('superagent');

    const date = new Date();
    date.setDate(date.getDate() - 10)

    superagent.get('https://api.polygon.io/v2/reference/news?ticker=' + ticker + '&published_utc.lt=' + date.toISOString() + '&limit=15&order=desc&apiKey=' + process.env.NEWS_API_KEY)
    .end((err: any, response: any) => {
        if (err) { return console.log(response); }

        let arr = ['']

        arr.pop()

        JSON.parse(response?.text)?.results.forEach((element: any) => {
            arr.push(element?.article_url)
        });

        res.json(
            {"data": JSON.parse(response?.text)?.results,
            "urls":arr});
    });
}