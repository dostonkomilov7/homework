import express from "express";
import sequelize from "./configs/db.config.js";
import router from "./routers/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

sequelize
    .authenticate()
    .then(() => console.log("DB connected ✅ "))
    .catch((err) => console.log("DB connection error ❌ ", err))

sequelize
  .sync({ force: false, alter: true })
  .then(() => console.log("All tables migrated✅"))
  .catch((err) => {
    console.log("Table migration error❌");
  });

app.use("/api", router);

app.listen(4000, () => {
    console.log("Listening on", 4000)
})