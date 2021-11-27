export default class BusinessRules {
    run(...params){
        for (const logic of params) {
            if(logic==true){
                return false;
            }
        }
        return true;
    }
}