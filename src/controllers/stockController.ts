import { Request, Response } from "express";

const detailsService = require('../services/detailsService');

export function stockGetDetailsController(req: Request, res: Response) {

    if (!req?.query?.ticker || req.query.ticker === "") {
        throw new Error('Incorrect Arguments pass ticker=[ticker] at end of query');
    }

    detailsService.getDetails(req.query.ticker, res)
}