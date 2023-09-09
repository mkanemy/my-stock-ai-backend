import { Response } from "express";

export function getAvailable(res: Response) {
    const superagent = require('superagent');

    let isFirst = true;

    res.setHeader('Content-Type', 'application/json');
    res.write('{')

    superagent.get('https://finnhub.io/api/v1/stock/symbol?exchange=US&mic=XNYS&token=' + process.env.FINNHUB_API_KEY)
    .end((err: any, response: any) => {
        if (err) { return console.log(response); }

        let arr = [{}]
        
        arr.pop()

        JSON.parse(response?.text).forEach((element: any) => {
            arr.push({"description": element?.description, "symbol":element?.displaySymbol})
        });

        isFirst = writeJson(isFirst, arr, res)
    });

    superagent.get('https://finnhub.io/api/v1/stock/symbol?exchange=US&mic=XNAS&token=' + process.env.FINNHUB_API_KEY)
    .end((err: any, response: any) => {
        if (err) { return console.log(response); }

        let arr = [{}]
        
        arr.pop()

        JSON.parse(response?.text).forEach((element: any) => {
            arr.push({"description": element?.description, "symbol":element?.displaySymbol})
        });
        
        isFirst = writeJson(isFirst, arr, res)
    });
}

function  writeJson(isFirst: boolean, arr: {}[], res: Response<any, Record<string, any>>) {
    if (isFirst) {
        res.write("\"data\":" + JSON.stringify(arr).slice(0, -1) + ",")
        return false;
    } else {
        res.write(JSON.stringify(arr).substring(1) + "\}")
        res.end()
        return isFirst
    }
}