import express, { Request, Response } from "express";

const app = express();
const stockController = require('../controllers/stockController');

// GET method route
app.get('/details', (req: Request, res: Response) => {
    try {
        const response = stockController.stockGetDetailsController(req, res);
        res.statusCode = 200;
    } catch (e) {
        res.status(400).send('Bad Request: ' + e);
    }
})

module.exports = app;