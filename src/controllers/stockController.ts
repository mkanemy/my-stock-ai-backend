import { Request, Response } from "express";

const stockService = require('../services/stockService');

export function stockGetDetailsController(req: Request, res: Response) {

    if (!req?.query?.ticker || req.query.ticker === "") {
        throw new Error('Incorrect Arguments pass ticker=[ticker] at end of query');
    }

    stockService.getDetails(req.query.ticker, res)
}