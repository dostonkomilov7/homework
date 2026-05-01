import { User } from "../models/user.model.js";
import type {Request, Response} from "express";

class UserController {
    private model: typeof User;

    constructor() {
        this.model = User
    }
}

export default new UserController();