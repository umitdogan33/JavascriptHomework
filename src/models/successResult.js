import Result from "./result.js";

export default class SuccessResult extends Result{
    constructor(message) {
        super(message,true);
      }

      constructor() {
        super(null,true);
      }
}