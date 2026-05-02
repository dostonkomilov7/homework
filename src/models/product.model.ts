import { BelongsTo, Column, Model, Table } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import Category from "./category.model";

@Table({tableName: "products", timestamps: true, deletedAt: true})
export class Product extends Model {
    @Column({primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER})
    declare id: number;

    @Column({allowNull: false, type: DataTypes.INTEGER})
    declare category_id: number;

    @Column({allowNull: false, type: DataTypes.STRING})
    declare name: string;

    @Column({allowNull: false, type: DataTypes.INTEGER})
    declare price: number;

    @Column({allowNull: false, type: DataTypes.INTEGER})
    declare count: number;

    @BelongsTo(() => Category, "category_id")
    declare category: Category;
}

export default Product