"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const rootRoutes = require('./routes/rootRoutes');
const stockRoutes = require('./routes/stockRoutes');
const gptRoutes = require('./routes/gptRoutes');
const app = (0, express_1.default)();
const PORT = 8000;
const swaggerDocument = require('../swagger.json');
const cors = require('cors');
exports.config = {
    runtime: 'edge',
};
require('dotenv').config();
app.use(cors());
app.use("/", rootRoutes);
app.use("/stock/", stockRoutes);
app.use("/ai/", gptRoutes);
app.listen(PORT, () => {
    console.info(`Server listening on port ${PORT}`);
});
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
