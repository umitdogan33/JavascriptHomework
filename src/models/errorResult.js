import Result from "./result.js";

export default class ErrorResult extends Result {
    constructor(message) {
        super(message, false);
    }

    constructor() {
        super(null,false);
    }
}