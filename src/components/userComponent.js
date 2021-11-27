import UserService from "../services/userService.js"
import User from "../models/user.js"
import {BaseLogger,MongoLogger} from "../crossCuttingConcerns/logging/loger.js"
import Customer from "../models/customer.js"
import CustomerService from "../services/CustomerService.js"
import CustomerRepository from "../repository/customerRepository.js"
let logger1 = new MongoLogger()
let customerRepository = new CustomerRepository()
let userService = new UserService(logger1)
let customerService = new CustomerService(customerRepository)


// let user1 = new User(1,"Engin","Demiroğ","Ankara")
// let user2 = new User(2,"Baran","Gökçekli","Muğla")
// userService.add(user1)
// userService.add(user2)

// console.log(userService.list())
// console.log(userService.getById(2))
// let customer = {id:1, firstName:"Engin"}

// //prototyping
// customer.lastName = "Demiroğ"

// console.log(customer.lastName)
// console.log("-----------------------------------------");
// let customerToAdd = new Customer(1,"Seda","Yılmaz","Ankara","fdgdfg");
// customerToAdd.type = "customer"

// userService.add(customerToAdd)
// userService.load();
// console.log(userService.employees)
// console.log(userService.customers)
// console.log(userService.errors)
// console.log(userService.getCustomersSorted())

let customerToAdd = new Customer(1,"Seda","Yılmaz","Ankara","jfşajglkjlakjgkla");
customerToAdd.type = "customer"
customerService.add(customerToAdd);
customerService.getAll();