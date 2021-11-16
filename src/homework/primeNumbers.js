function primeNumbers (...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i]===1){
            console.log(numbers[i] + " is not a Prime number.")

        }
        let isPrime = 0;

        for(let x = 2; x < numbers[i]; x++) {
           
            if(numbers[i] % x == 0) {
                isPrime++;
            }
        }
        if(isPrime == 0) {
            console.log(numbers[i] + " is a Prime number")
        } else {
            console.log(numbers[i] + " is not a Prime number.")
        } 
    }
}
primeNumbers(8,10,2,50,7,20,5); 