import type {Request, Response} from "express";
import { Product } from "../models/product.model.js";
import Category from "../models/category.model.js";

class CategoryController {
    private model: typeof Category;

    constructor() {
        this.model = Category
    }

    getAllWithProduct = async (req: Request, res: Response) => {
        const category = await this.model.findAll({
            include: [
                {
                    model: Product,
                }
            ]
        })

        res.send({
            success: true,
            data: category
        })
    }

    getAll = async (req: Request, res: Response) => {
        const category = await this.model.findAll()

        res.send({
            success: true,
            data: category
        })
    }

    create = async (req: Request, res: Response) => {
        const {name} = req.body;

        const existingCategory = await this.model.findOne({where: {name}});

        if (existingCategory) {
            return res.status(404).send({
                success: true,
                message: "Category have already existed"
            });
        }

        await this.model.create({name});

        res.status(201).send({
            success: true,
            message: "Successfully created"
        })
    }

    update = async (req: Request, res: Response) => {
        const {name} = req.body;
        const {id} = req.params;

        const existingCategory = await this.model.findOne({where: {id}});

        if (!existingCategory) {
            return res.status(404).send({
                success: true,
                message: "Category is not found"
            });
        }

        await this.model.update(
            { name },
            { where: { id } }
        );

        res.status(200).send({
            success: true,
            message: "Successfully updated"
        })
    }

    delete = async (req: Request, res: Response) => {
        const {id} = req.params;

        const existingCategory = await this.model.findOne({where: {id}});

        if (!existingCategory) {
            return res.status(404).send({
                success: true,
                message: "Category is not found"
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

export default new CategoryController();