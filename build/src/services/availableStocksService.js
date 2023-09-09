"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAvailable = void 0;
function getAvailable(res) {
    const superagent = require('superagent');
    let isFirst = true;
    res.setHeader('Content-Type', 'application/json');
    res.write('{');
    superagent.get('https://finnhub.io/api/v1/stock/symbol?exchange=US&mic=XNYS&token=' + process.env.FINNHUB_API_KEY)
        .end((err, response) => {
        if (err) {
            return console.log(response);
        }
        let arr = [{}];
        arr.pop();
        JSON.parse(response === null || response === void 0 ? void 0 : response.text).forEach((element) => {
            arr.push({ "description": element === null || element === void 0 ? void 0 : element.description, "symbol": element === null || element === void 0 ? void 0 : element.displaySymbol });
        });
        isFirst = writeJson(isFirst, arr, res);
    });
    superagent.get('https://finnhub.io/api/v1/stock/symbol?exchange=US&mic=XNAS&token=' + process.env.FINNHUB_API_KEY)
        .end((err, response) => {
        if (err) {
            return console.log(response);
        }
        let arr = [{}];
        arr.pop();
        JSON.parse(response === null || response === void 0 ? void 0 : response.text).forEach((element) => {
            arr.push({ "description": element === null || element === void 0 ? void 0 : element.description, "symbol": element === null || element === void 0 ? void 0 : element.displaySymbol });
        });
        isFirst = writeJson(isFirst, arr, res);
    });
}
exports.getAvailable = getAvailable;
function writeJson(isFirst, arr, res) {
    if (isFirst) {
        res.write("\"data\":" + JSON.stringify(arr).slice(0, -1) + ",");
        return false;
    }
    else {
        res.write(JSON.stringify(arr).substring(1) + "\}");
        res.end();
        return isFirst;
    }
}
