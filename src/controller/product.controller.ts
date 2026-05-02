import type {Request, Response} from "express";
import Product from "../models/product.model";

class ProductController {
    private model: typeof Product;

    constructor() {
        this.model = Product;
    }

    getAll = async (req: Request, res: Response) => {
        const products = await this.model.findAll()

        res.send({
            success: true,
            data: products
        })
    }

    create = async (req: Request, res: Response) => {
        const {name, price, count, category_id} = req.body;

        if (!name || !price || !count || !category_id) {
            return res.status(400).send({
                success: true,
                message: "Fileds must be detailed"
            });
        }

        await this.model.create({name, price, count, category_id});

        res.status(201).send({
            success: true,
            message: "Successfully created"
        })
    }

    update = async (req: Request, res: Response) => {
        const {name, price, count, category_id} = req.body;
        const {id} = req.params;

        const existingProduct = await this.model.findOne({where: {id}});

        if (!name || !price || !count) {
            return res.status(400).send({
                success: true,
                message: "Fileds must be detailed"
            });
        }

        if (!existingProduct) {
            return res.status(404).send({
                success: true,
                message: "Product is not found"
            });
        }

        await this.model.update(
            { name, price, count, category_id },
            { where: { id } }
        );

        res.status(200).send({
            success: true,
            message: "Successfully updated"
        })
    }

    delete = async (req: Request, res: Response) => {
        const {id} = req.params;

        const existingProduct = await this.model.findOne({where: {id}});

        if (!existingProduct) {
            return res.status(404).send({
                success: true,
                message: "Product is not found"
            });
        }

        await this.model.destroy(
            { where: { id } } 
        );

        res.status(200).send({
            success: true,
            message: "Successfully deleted"
        })
    }
}

export default new ProductController();