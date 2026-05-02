import { DataTypes } from "sequelize";
import { Column, HasMany, Model, Table } from "sequelize-typescript";
import Product from "./product.model";

@Table({ tableName: "categories", timestamps: true, deletedAt: true })
class Category extends Model {
    @Column({ primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER })
    declare id: number;

    @Column({ allowNull: false, type: DataTypes.STRING })
    declare name: string;

    @HasMany(() => Product, "category_id")
    declare product: Product[];
}

export default Category