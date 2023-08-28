import { Response } from "express";
const finnhub = require('finnhub');

export function getDetails(ticker: string, res: Response) {
    const api_key = finnhub.ApiClient.instance.authentications['api_key'];
    api_key.apiKey = process.env.FINNHUB_API_KEY
    const finnhubClient = new finnhub.DefaultApi()

    finnhubClient.quote(ticker, (error: any, data: any, response: any) => {
        // Modify data here
        res.json(data)
    })
}