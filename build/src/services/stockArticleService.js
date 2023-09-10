"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRecentNewsArticles = void 0;
function getRecentNewsArticles(ticker, res) {
    const superagent = require('superagent');
    const date = new Date();
    date.setDate(date.getDate() - 10);
    superagent.get('https://api.polygon.io/v2/reference/news?ticker=' + ticker + '&published_utc.lt=' + date.toISOString() + '&limit=15&order=desc&apiKey=' + process.env.NEWS_API_KEY)
        .end((err, response) => {
        var _a, _b;
        if (err) {
            return console.log(response);
        }
        let arr = [''];
        arr.pop();
        (_a = JSON.parse(response === null || response === void 0 ? void 0 : response.text)) === null || _a === void 0 ? void 0 : _a.results.forEach((element) => {
            arr.push(element === null || element === void 0 ? void 0 : element.article_url);
        });
        res.json({ "data": (_b = JSON.parse(response === null || response === void 0 ? void 0 : response.text)) === null || _b === void 0 ? void 0 : _b.results,
            "urls": arr });
    });
}
exports.getRecentNewsArticles = getRecentNewsArticles;
