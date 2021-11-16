var numbers=1;
function primeNumbers () {
    for (let i = 0; i <1000; i++) {
        if(numbers===1){
            console.log(numbers + " is not a Prime number.")

        }
        let isPrime = 0;

        for(let x = 2; x < numbers; x++) {
           
            if(numbers % x == 0) {
                isPrime++;
            }
        }
        if(isPrime == 0) {
            console.log(numbers + " is a Prime number")
        }
        //  else {
        //     console.log(numbers + " is not a Prime number.")
        // } 
        numbers++;
    }
}
primeNumbers(8,10,2,50,7,20,5); 