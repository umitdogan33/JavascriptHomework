import DataError from "../models/dataError.js";
import SuccessDataResult from "../models/successDataResult.js";
import BusinessRules from "../utilities/businessRules.js";

export default class EmployeeService {
  constructor(customerRepository) {
    this.errors = [];
    this.customerRepository = customerRepository;
  }

  add(employee){
    let businessRules = new BusinessRules();
    // if(!this.checkCustomerValidityForErrors(customer)&&!this.checkAgeInt(customer)){
    //      let dataError = new SuccessDataResult("ekleme başarılı",customer);
    //     this.customerRepository.add(customer);
    //     console.log(dataError);
    //     return;
    // }
    let result = businessRules.run(this.checkEmployeeValidityForErrors(employee),this.checkAgeInt(employee));
    if(result==false){
        console.log(this.errors);
        return;
    }
    let dataError = new SuccessDataResult("ekleme başarılı",customer);
            this.customerRepository.add(customer);
             console.log(dataError);
    
    }

    getAll(){
      return new SuccessDataResult("listedi",this.customerRepository.getAll());
    }

  checkEmployeeValidityForErrors(user) {
    let requiredFields = "id firstName lastName age city salary".split(" ");
    let hasErrors = false;
    for (const field of requiredFields) {
      if (!user[field]) {
        hasErrors = true;
        this.errors.push(
          new DataError(user, `Validation problem. ${field} is required`)
        );
      }
    }
  }

  checkAgeInt(employee){
    let hasErrors = false;
 if (Number.isNaN(Number.parseInt(+employee.age))) {
      hasErrors = true;
      this.errors.push(
       new DataError(user,`Validation problem. ${employee.age} is not a number`))
     
   }
   return hasErrors; 
}
}
