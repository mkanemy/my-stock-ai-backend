import { Response } from "express";
const finnhub = require('finnhub');

export function getAvailable(ticker: string, res: Response) {
    const superagent = require('superagent');

    superagent.get('https://finnhub.io/api/v1/stock/symbol?exchange=US&token=' + process.env.FINNHUB_API_KEY)
    .end((err: any, response: any) => {
        if (err) { return console.log(response); }

        let arr = [{}]
        
        arr.pop()

        JSON.parse(response?.text).forEach((element: any) => {
            arr.push({"description": element?.description, "symbol":element?.displaySymbol})
        });

        res.json({"data": arr})
    });
}