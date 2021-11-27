import { users } from "../data/users.js";

export default class UserRepository {
    constructor() {
        this.user = users
    }

    add(user) {
        this.user.push(user);
    }

    getAll() {
        return this.user;
    }
}