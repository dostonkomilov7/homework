import { Router } from "express";
import categoryController from "../controller/category.controller.js";

const categoryRouter = Router();

categoryRouter
    .get("/", categoryController.getAll)
    .get("/with-product", categoryController.getAllWithProduct)
    .post("/", categoryController.create)
    .put("/:id", categoryController.update)
    .delete("/:id", categoryController.delete)

export default categoryRouter;