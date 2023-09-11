import OpenAI from "openai";
import { Response } from "express";

export async function getSummary(ticker: string, companyName: string, articles: string, res: Response) {

    const openai = new OpenAI({
        apiKey: process.env.GPT_API_KEY,
    });

    const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
            {
            "role": "system",
            "content": "I will provide you a stock ticker symbol and name of company along with a list of urls to recent news articles about that company. Your job is to create a summary in 150 words or less summarizing the significant news points about the company for investors. "
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
    res.json(response)
}