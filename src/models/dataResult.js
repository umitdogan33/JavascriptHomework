import Result from "./result.js";

export default class DataResult extends Result {
    constructor(message,data,success) {
        super(message,success);
        this.data = data;
        
    }
      }