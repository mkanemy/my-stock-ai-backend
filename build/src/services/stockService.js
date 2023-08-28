"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDetails = void 0;
const finnhub = require('finnhub');
function getDetails(ticker, res) {
    const api_key = finnhub.ApiClient.instance.authentications['api_key'];
    api_key.apiKey = process.env.FINNHUB_API_KEY;
    const finnhubClient = new finnhub.DefaultApi();
    finnhubClient.quote(ticker, (error, data, response) => {
        // Modify data here
        res.json(data);
    });
}
exports.getDetails = getDetails;
