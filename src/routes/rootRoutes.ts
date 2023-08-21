import express, { Request, Response } from "express";

const app = express();
const rootController = require('../controllers/rootController');
const serverless = require('../../serverless-http');

// GET method route
app.get('/', (req: Request, res: Response) => {
    async function doRequest() {
        const response = await rootController.rootGetController();
        res.statusCode = 200;
        res.send(response);
    }

    doRequest();
})

// POST method route
app.post('/', (req: Request, res: Response) => {
    res.status(200).send('POST request to the homepage');
})

app.get('/favicon.ico', (req, res) => res.status(204));

module.exports.handler = serverless(app);