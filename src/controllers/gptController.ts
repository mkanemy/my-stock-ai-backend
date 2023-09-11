import { Request, Response } from "express";

const gptSummaryService = require('../services/gptSummaryService');

export async function getArticleSummary(req: Request, res: Response) {

    // Process input - article array & ticker
    
    await gptSummaryService.getSummary(req.body.ticker, req.body.companyName, req.body.articles, req.body.quote, res)
}