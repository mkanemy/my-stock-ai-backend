"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRecentNewsArticles = void 0;
function getRecentNewsArticles(ticker, res) {
    const superagent = require('superagent');
    superagent.get('https://newsdata.io/api/1/news?apikey=' + process.env.NEWS_API_KEY + '&q=' + ticker.replace(/\+/g, '%20')) // + process.env.newsApiKey)
        .end((err, response) => {
        var _a, _b;
        console.log(response);
        if (err) {
            return console.log(response);
        }
        let arr = [''];
        arr.pop();
        (_a = JSON.parse(response === null || response === void 0 ? void 0 : response.text)) === null || _a === void 0 ? void 0 : _a.results.forEach((element) => {
            arr.push(element === null || element === void 0 ? void 0 : element.link);
        });
        res.json({ "data": (_b = JSON.parse(response === null || response === void 0 ? void 0 : response.text)) === null || _b === void 0 ? void 0 : _b.results,
            "urls": arr });
    });
}
exports.getRecentNewsArticles = getRecentNewsArticles;
