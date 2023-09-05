import { Request, Response } from "express";

const detailsService = require('../services/detailsService');
const availableStocksService = require('../services/availableStocksService');

export function stockGetDetailsController(req: Request, res: Response) {

    if (!req?.query?.ticker || req.query.ticker === "") {
        throw new Error('Incorrect Arguments pass ticker=[ticker] at end of query');
    }

    detailsService.getDetails(req.query.ticker, res)
}

export function stockGetAvailableController(req: Request, res: Response) {
    availableStocksService.getAvailable(req.query.ticker, res)
}