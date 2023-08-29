import { Response } from "express";
const finnhub = require('finnhub');

export function getDetails(ticker: string, res: Response) {
    const api_key = finnhub.ApiClient.instance.authentications['api_key'];
    api_key.apiKey = process.env.FINNHUB_API_KEY
    const finnhubClient = new finnhub.DefaultApi()

    res.setHeader('Content-Type', 'application/json');
    res.write('{')

    let counter = 0;

    finnhubClient.quote(ticker, (error: any, data: any, response: any) => {
        if (res.write("\"quoteData\":" + JSON.stringify(data))) {
            writeJson(counter, res)
            counter++
        }
    })

    finnhubClient.companyProfile2({"symbol": ticker}, (error: any, data: any, response: any) => {
        if (res.write("\"companyData\":" + JSON.stringify(data))) {
            writeJson(counter, res)
            counter++
        }
    })

    finnhubClient.companyBasicFinancials(ticker, "ALL", (error: any, data: any, response: any) => {
        if (res.write("\"financialMetrics\":" + JSON.stringify(data.metric))) {
            writeJson(counter, res)
            counter++
        }
    })

}

function writeJson(counter: number, res: Response) {
    if (counter === 2) {
        res.write('}')
        res.end(); 
    } else {
        res.write(',')
        counter++
    }
}
