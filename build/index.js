"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_service_1 = require("./services/database.service");
const cors_1 = __importDefault(require("cors"));
const portfolio_router_1 = require("./routes/portfolio.router");
const app = (0, express_1.default)();
const port = 8080;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/portfolio", portfolio_router_1.portfolioRouter);
(0, database_service_1.connectToDatabase)()
    .then(() => {
    app.listen(port, () => {
        console.log(`server started at ${port}`);
    });
})
    .catch((error) => {
    console.error(`Databased connection failed ${error}`);
    process.exit();
});
