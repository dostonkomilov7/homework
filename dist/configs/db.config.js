import { config } from "dotenv";
import { Sequelize } from "sequelize-typescript";
config({ quiet: true });
const sequelize = new Sequelize({
    dialect: "postgres",
    database: process.env.DB_NAME,
    host: process.env.HOST,
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    models: [process.cwd() + "/src/models/*.js"],
});
sequelize.authenticate()
    .then(() => console.log("DB connected ✅ "))
    .catch((err) => console.log("DB connection error ❌ ", err));
export default sequelize;
