import DataResult from "./dataResult.js";

export default class DataError extends DataResult{
    constructor(message, data){
        super(message,data,false);
    }

    // constructor(message){
    //     super(message,false);
    // }

    // constructor(data){
    //     super(data,false);
    // }
}