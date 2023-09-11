import express, { Request, Response } from "express";
import bodyParser from 'body-parser';

const app = express();
app.disable("x-powered-by");
const gptController = require('../controllers/gptController');

export const config = {
    runtime: 'edge',
};

// GET method route
app.post('/summary', bodyParser.json(), async (req: Request, res: Response) => {
    try {
        res.statusCode = 200;
        await gptController.getArticleSummary(req, res);
    } catch (e) {
        res.statusCode = 400;
        res.end('ERROR: ' + e)
    }
})

module.exports = app;