import express, { Request, Response } from "express";

const app = express();
const rootController = require('../controllers/rootController');

// GET method route
app.get('/', async (req: Request, res: Response) => {
    console.log("ENTER");
    const response = await rootController.rootGetController();
    console.log("EXIT: " + response);
    res.statusCode = 200;
    res.send(response);
})

// POST method route
app.post('/', (req: Request, res: Response) => {
    res.status(200).send('POST request to the homepage');
})

module.exports = app;