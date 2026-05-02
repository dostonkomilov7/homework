import { Router } from "express";
import productController from "../controller/product.controller.js";

const productRouter = Router();

productRouter
    .get("/", productController.getAll)
    .post("/", productController.create)
    .put("/:id", productController.update)
    .delete("/:id", productController.delete)

export default productRouter;