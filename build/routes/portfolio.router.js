"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.portfolioRouter = void 0;
const express_1 = __importDefault(require("express"));
const database_service_1 = require("../services/database.service");
exports.portfolioRouter = express_1.default.Router();
exports.portfolioRouter.post("/submit", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const formData = req.body;
        const result = yield ((_a = database_service_1.collections.form) === null || _a === void 0 ? void 0 : _a.insertOne(formData));
        result
            ? res.status(201).send(`Successfully created a new message with id ${result.insertedId}`)
            : res.status(500).send("Failed to create a new messge.");
    }
    catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
}));
exports.portfolioRouter.get("/projects", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        const projects = (yield ((_b = database_service_1.collections.projects) === null || _b === void 0 ? void 0 : _b.find({}).toArray()));
        res.status(200).send(projects);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}));
exports.portfolioRouter.get("/experience", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    try {
        const experience = (yield ((_c = database_service_1.collections.experience) === null || _c === void 0 ? void 0 : _c.find({}).toArray()));
        res.status(200).send(experience);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}));
