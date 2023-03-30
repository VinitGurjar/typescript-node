"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//init the express
const app = (0, express_1.default)();
//endpoint
app.get('/', (req, res, next) => {
    res.send('hello there ... obi wan kenobi');
});
const PORT = 5000;
app.listen(PORT, () => console.log(`server is listning on port http/${PORT}`));
