import DataError from "../models/dataError.js";
import ErrorResult from "../models/errorResult.js";
import SuccessResult from "../models/successResult.js";
import SuccessDataResult from "../models/successDataResult.js";
import BusinessRules from "../utilities/businessRules.js";
export default class CustomerService {
    
    constructor(customerRepository) {
         this.errors = [];
        this.customerRepository = customerRepository;
    }

    
    add(customer){
    let businessRules = new BusinessRules();
    let result = businessRules.run(this.checkCustomerValidityForErrors(customer),this.checkAgeInt(customer));
    if(result==false){
        console.log(this.errors);
        return;
    }
    let dataError = new SuccessDataResult("ekleme başarılı",customer);
            this.customerRepository.add(customer);
             console.log(dataError);
            //  return;
    
    }

    getAll(){
        console.log(new SuccessDataResult("listed",this.customerRepository.getAll()));
    }

    getCustomersSorted(){
        return this.customerRepository.getAll().sort((customer1,customer2)=>{
            if(customer1.firstName>customer2.firstName){
                return 1;
            }else if(customer1.firstName===customer2.firstName){
                return 0;
            }else{
                return -1
            }
        })
    }

    getCustomerById(id) {
        return this.customers.find(u=>u.id ===id)
    }
    
    checkCustomerValidityForErrors(user) {
        let requiredFields = "id firstName lastName age city".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if (!user[field]) {
                hasErrors = true
                this.errors.push(
                    new DataError(`Validation problem. ${field} is required`, user))
            }
        }
        return hasErrors;
    }

      checkAgeInt(user){
           let hasErrors = false;
        if (Number.isNaN(Number.parseInt(+user.age))) {
             hasErrors = true;
             this.errors.push(
              new DataError(user,`Validation problem. ${user.age} is not a number`))
            
          }
          return hasErrors; 
      }
}