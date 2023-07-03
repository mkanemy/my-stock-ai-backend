"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_openapi_1 = require("express-openapi");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const routes = require('./routes/rootRoutes');
const app = (0, express_1.default)();
const PORT = 3000;
app.use("/", routes);
app.listen(PORT, () => {
    console.info(`Server listening on port ${PORT}`);
});
app.use("/api-documentation", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup({
    swaggerOptions: {
        url: "http://localhost:3030/api-docs",
    },
}));
(0, express_openapi_1.initialize)({
    app,
    apiDoc: require("./api/api-doc"),
    paths: "./api/paths",
});
