import express, { Request, Response } from "express";

const app = express();
const rootController = require('../controllers/rootController');

// GET method route
app.get('/root', (req: Request, res: Response) => {
    async function doRequest() {
        const response = await rootController.rootGetController();
        res.statusCode = 200;
        res.send(response);
    }

    doRequest();
})

app.get('/favicon.ico', (req, res) => res.status(204));

module.exports = app;