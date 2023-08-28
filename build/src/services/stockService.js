"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDetails = void 0;
const finnhub = require('finnhub');
function getDetails(ticker, res) {
    const api_key = finnhub.ApiClient.instance.authentications['api_key'];
    api_key.apiKey = process.env.FINNHUB_API_KEY;
    const finnhubClient = new finnhub.DefaultApi();
    res.setHeader('Content-Type', 'application/json');
    res.write('{');
    let counter = 0;
    finnhubClient.quote(ticker, (error, data, response) => {
        if (res.write("\"quoteData\":" + JSON.stringify(data))) {
            writeJson(counter, res);
            counter++;
        }
    });
    finnhubClient.companyProfile2({ "symbol": ticker }, (error, data, response) => {
        if (res.write("\"companyData\":" + JSON.stringify(data))) {
            writeJson(counter, res);
            counter++;
        }
    });
    finnhubClient.companyBasicFinancials(ticker, "ALL", (error, data, response) => {
        if (res.write("\"financialMetrics\":" + JSON.stringify(data.metric))) {
            writeJson(counter, res);
            counter++;
        }
    });
    finnhubClient.companyBasicFinancials(ticker, "ALL", (error, data, response) => {
        if (res.write("\"financialMetrics\":" + JSON.stringify(data.metric))) {
            writeJson(counter, res);
            counter++;
        }
    });
}
exports.getDetails = getDetails;
function writeJson(counter, res) {
    if (counter === 2) {
        res.write('}');
        res.end();
    }
    else {
        res.write(',');
        counter++;
    }
}
