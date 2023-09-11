import express, { Request, Response } from "express";
import swaggerUi from "swagger-ui-express";

const rootRoutes = require('./routes/rootRoutes');
const stockRoutes = require('./routes/stockRoutes');
const gptRoutes = require('./routes/gptRoutes');
const app = express();
const PORT = process.env.PORT || 8000;;
const swaggerDocument = require('../swagger.json');
const cors = require('cors');

export const config = {
    runtime: 'edge',
};

require('dotenv').config()

app.use(cors());
app.use("/", rootRoutes);
app.use("/stock/", stockRoutes);
app.use("/ai/", gptRoutes);

app.listen(PORT, () => {
    console.info(`Server listening on port ${PORT}`);
});

app.use(
    '/api-docs',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
);