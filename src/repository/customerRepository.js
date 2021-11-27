import { users } from "../data/users.js";

export default class CustomerRepository{
    constructor(){
        this.customer = users.filter(user => user.type === "customer");
    }

    add(customer){
        this.customer.push(customer);
    }

    getAll(){
        return this.customer;
    }
}