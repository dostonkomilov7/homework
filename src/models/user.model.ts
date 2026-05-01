import { Model } from "sequelize";
import {  Column, Table } from "sequelize-typescript";

@Table({tableName: "users", timestamps: true, deletedAt: true})
export class User extends Model {
    @Column({primaryKey: true, autoIncrement: true})
    declare id: number;

    @Column({allowNull: false})
    name: string;

    @Column({allowNull: false, unique: true})
    email: string;

    @Column({allowNull: false})
    password: string;

}