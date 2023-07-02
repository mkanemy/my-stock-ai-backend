import express, { Request, Response } from "express";

const app = express();
const rootController = require('../controllers/rootController');

// GET method route
app.get('/', (req: Request, res: Response) => {
    rootController.rootGetController();
})

// POST method route
app.post('/', (req: Request, res: Response) => {
    res.send('POST request to the homepage');
})

module.exports = app;