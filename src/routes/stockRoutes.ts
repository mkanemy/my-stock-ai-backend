import express, { Request, Response } from "express";

const app = express();
app.disable("x-powered-by");
const stockController = require('../controllers/stockController');

// GET method route
app.get('/details', (req: Request, res: Response) => {
    try {
        res.statusCode = 200;
        stockController.stockGetDetailsController(req, res);
    } catch (e) {
        res.statusCode = 400;
        res.end('ERROR: ' + e)
    }
})

module.exports = app;