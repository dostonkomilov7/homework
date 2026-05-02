"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_config_js_1 = __importDefault(require("./configs/db.config.js"));
const index_js_1 = __importDefault(require("./routers/index.js"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
db_config_js_1.default
    .authenticate()
    .then(() => console.log("DB connected ✅ "))
    .catch((err) => console.log("DB connection error ❌ ", err));
db_config_js_1.default
    .sync({ force: false, alter: true })
    .then(() => console.log("All tables migrated✅"))
    .catch((err) => {
    console.log("Table migration error❌");
});
app.use("/api", index_js_1.default);
app.listen(4000, () => {
    console.log("Listening on", 4000);
});
