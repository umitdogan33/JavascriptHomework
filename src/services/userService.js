import { users } from "../data/users.js";
import DataError from "../models/dataError.js";

export default class UserService {
  constructor(customerRepository) {
    // this.employees = [];
    this.errors = [];
    this.customerRepository = customerRepository;
  }


  getAllUsers() {
    console.log(new SuccessDataResult("listedi", users));
  }

  // load() {
  //   for (const user of users) {
  //     switch (user.type) {
  //       case "customer":
  //         if (!this.checkCustomerValidityForErrors(user)) {
  //           this.customers.push(user);
  //         }
  //         break;
  //       case "employee":
  //         if (!this.checkEmployeeValidityForErrors(user)) {
  //           this.employees.push(user);
  //         }
  //         break;
  //       default:
  //         this.errors.push(new DataError("Wrong user type", user));
  //         break;
  //     }
  //   }
  // }

  //formik-yup


  // checkEmployeeValidityForErrors(user) {
  //   let requiredFields = "id firstName lastName age city salary".split(" ");
  //   let hasErrors = false;
  //   for (const field of requiredFields) {
  //     if (!user[field]) {
  //       hasErrors = true;
  //       this.errors.push(
  //         new DataError(user,`Validation problem. ${field} is required`)
  //       );
  //     }
  //   }

  //   if (Number.isNaN(Number.parseInt(user.age))) {
  //     hasErrors = true;
  //     this.errors.push(
  //       new DataError(user,`Validation problem. ${user.age} is not a number`)
  //     );
  //     return hasErrors;
  //   }
    
  // }

  // add(user) {
  //   switch (user.type) {
  //     case "customer":
  //         if(!this.checkCustomerValidityForErrors(user)){
  //       this.customers.push(user);
  //         }
  //       break;

  //     case "employee":
  //     if(!this.checkEmployeeValidityForErrors(user)){
  //       this.employees.push(user);
  //     }
  //       break;

  //     default:
  //         this.errors.push(new DataError("Wrong user type", user));
  //       break;
  //   }
  //   this.loggerService.log(user);
  // }

//   listCustomers() {
//     return this.customers
// }




}
