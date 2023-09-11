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
function getSummary(ticker, companyName, articles, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const openai = new openai_1.default({
            apiKey: process.env.GPT_API_KEY,
        });
        const response = yield openai.chat.completions.create({
            model: "gpt-4",
            messages: [
                {
                    "role": "system",
                    "content": "I will provide you a stock ticker symbol and name of company along with a list of urls to recent news articles about that company. Your job is to create a summary in 200 words or less summarizing the significant news points about the company for investors. Make sure that the points of significance are mentioned!"
                },
                {
                    "role": "user",
                    "content": "Ticker: " + ticker + "\nName: " + companyName + "\nArticles: " + articles.toString()
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
