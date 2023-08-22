"use strict";
// import express, { Request, Response } from "express";
// import { initialize } from "express-openapi";
// import swaggerUi from "swagger-ui-express";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const routes = require('./routes/rootRoutes');
// const app = express();
// const PORT = 8000;
// const swaggerDocument = require('../swagger.json');
// const cors = require('cors');
// require('dotenv').config()
// app.use(cors());
// app.use("/", routes);
// app.listen(PORT, () => {
//     console.info(`Server listening on port ${PORT}`);
// });
// app.use(
//     '/api-docs',
//     swaggerUi.serve, 
//     swaggerUi.setup(swaggerDocument)
// );
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
app.get('/', (_req, res) => {
    return res.send('Express Typescript on Vercel');
});
app.get('/ping', (_req, res) => {
    return res.send('pong 🏓');
});
app.listen(port, () => {
    return console.log(`Server is listening on ${port}`);
});
