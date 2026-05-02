"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const sequelize_typescript_1 = require("sequelize-typescript");
(0, dotenv_1.config)({ quiet: true });
const sequelize = new sequelize_typescript_1.Sequelize({
    dialect: "postgres",
    database: process.env.DB_NAME,
    host: process.env.HOST,
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    models: [process.cwd() + "/dist/models"],
});
exports.default = sequelize;
