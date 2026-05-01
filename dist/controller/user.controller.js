import { User } from "../models/user.model.js";
class UserController {
    model;
    constructor() {
        this.model = User;
    }
}
export default new UserController();
