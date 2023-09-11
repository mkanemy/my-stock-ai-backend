import OpenAI from "openai";
import { Response } from "express";

export async function getSummary(ticker: string, companyName: string, articles: string, quote: any, res: Response) {

    const openai = new OpenAI({
        apiKey: process.env.GPT_API_KEY,
    });

    const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
            {
            "role": "system",
            "content": "I will provide you a stock ticker symbol, the corresponding name of the company, a list of urls to recent news articles related to that company and a bunch of current financial data about that company."
            + "Your job is to firstly create a summary in 200 words or less summarizing any possible significant news points (if there are no significant news points just use any points you can find) about the company for investors. Make sure that any points of significance are mentioned!"
            + "Next, you will create a second separate paragraph that MUST BE separated by '---' from the first one. This paragraph will be 100 words or less and will inform me - based on the news articles and financial data, if the stock is a 'Strong Buy', 'Soft Buy', 'Hold', 'Soft Sell' or 'Strong Sell'. When doing this second paragraph please don't just repeat the numbers I gave you - I already know them."
            + "Also for formatting - YOU MUST MAKE SURE that the last number of the response is either 1 for strong buy, 2 for soft buy, 3 for hold, 4 for soft sell or 5 for strong sell (DO NOT PUT ANYTHING AFTER THIS NUMBER EVEN A PERIOD IT MUST BE THE LAST CHARACTER OF THE WHOLE RESPONSE!!!)"
            },
            {
            "role": "user",
            "content": "Ticker: " + ticker + "\nName: " + companyName + "\nArticles: " + articles?.toString() + "\nCurrent Price: " + quote.currentPrice + 
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
    res.json(response)
}