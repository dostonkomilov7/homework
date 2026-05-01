import { Model } from "sequelize";
export declare class User extends Model {
    id: number;
    name: string;
    email: string;
    password: string;
}
