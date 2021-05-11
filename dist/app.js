"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const indexRoute_1 = __importDefault(require("./routes/indexRoute"));
// create express app instance
const app = express_1.default();
app.listen(3000);
// add third party middleware - Pretty logs
app.use(morgan_1.default("dev"));
//index route
app.use(indexRoute_1.default);
// 404 page with middleware | this code need to be always last
app.use((req, res) => {
    res.send({ asd: "as" });
});
