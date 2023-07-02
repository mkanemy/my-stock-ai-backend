import express, { Request, Response } from "express";

const routes = require('./routes/rootRoutes');
const app = express();
const PORT = 3000;

app.use("/", routes);

app.listen(PORT, () => {
    console.info(`Server listening on port ${PORT}`);
});