import express, { Request, Response } from "express";
import { initialize } from "express-openapi";
import swaggerUi from "swagger-ui-express";

const routes = require('./routes/rootRoutes');
const app = express();
const PORT = 8000;
const swaggerDocument = require('../swagger.json');
const cors = require('cors');

require('dotenv').config()

app.use(cors());
app.use("/", routes);

app.listen(PORT, () => {
    console.info(`Server listening on port ${PORT}`);
});

app.use(
    '/api-docs',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
);