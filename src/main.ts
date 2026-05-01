import express from "express";
import sequelize from "./configs/db.config.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// await sequelize 
app.listen(4000, () => {
    console.log("Listening on", 4000)
})