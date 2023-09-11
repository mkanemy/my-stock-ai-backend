"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSummary = void 0;
const openai_1 = __importDefault(require("openai"));
function getSummary(ticker, companyName, articles, quote, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const openai = new openai_1.default({
            apiKey: process.env.GPT_API_KEY,
        });
        const response = yield openai.chat.completions.create({
            model: "gpt-4",
            messages: [
                {
                    "role": "system",
                    "content": "I will provide you a stock ticker symbol, the corresponding name of the company, a list of urls to recent news articles related to that company and a bunch of current financial data about that company."
                        + "Your job is to firstly create a summary in 200 words or less summarizing any possible significant news points (if there are no significant news points just use any points you can find) about the company for investors. Make sure that any points of significance are mentioned!"
                        + "Next, you will create a second separate paragraph that is separated by '---' from the first one. This paragraph will be 100 words or less and will inform me - based on the news articles and financial data, if the stock is a 'Strong Buy', 'Soft Buy', 'Hold', 'Soft Sell' or 'Strong Sell'. When doing this second paragraph please don't just repeat the numbers I gave you - I already know them."
                        + "Also for formatting - YOU MUST MAKE SURE that the last number of the response is either 1 for strong buy, 2 for soft buy, 3 for hold, 4 for soft sell or 5 for strong sell (DO NOT PUT ANYTHING AFTER THIS NUMBER EVEN A PERIOD IT MUST BE THE LAST CHARACTER OF THE WHOLE RESPONSE!!!)"
                },
                {
                    "role": "user",
                    "content": "Ticker: " + ticker + "\nName: " + companyName + "\nArticles: " + (articles === null || articles === void 0 ? void 0 : articles.toString()) + "\nCurrent Price: " + quote.currentPrice +
                        "\nPrevious Open: " + quote.open + "\nDaily High: " + quote.high + "\nDaily Low: " + quote.low + "\nMarket Cap: " + quote.marketCap +
                        "\nDividend Yield: " + quote.yield + "\nBeta: " + quote.beta + "\nEarnings Per Share: " + quote.eps +
                        "\nPrice to Earnings Ratio: " + quote.pe
                }
            ],
            temperature: 1,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });
        res.json(response);
    });
}
exports.getSummary = getSummary;
