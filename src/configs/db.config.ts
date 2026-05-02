import { config } from "dotenv";
import { Sequelize } from "sequelize-typescript";

config({quiet: true});

const sequelize = new Sequelize({
    dialect: "postgres",
    database: process.env.DB_NAME as string,
    host: process.env.HOST as string,
    port: process.env.DB_PORT ? Number(process.env.DB_PORT): 5432,
    username: process.env.DB_USER as string,
    password: process.env.DB_PASS as string,
    models: [process.cwd() + "/dist/models"],
});

export default sequelize;