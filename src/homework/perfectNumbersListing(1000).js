var numbers = 1;
function perfectNumbers() {
    for (let i = 0; i < 1000; i++) {
        if(factorization(numbers) === numbers){
            console.log(numbers + " is a Perfect number.")
        }

        // else{
        //     console.log(numbers + " is not a Perfect number.")
        // }
        numbers++;
    }
}

function factorization(number) {
    var count = 0;
    for (var i=1; i<=number; i++)
    {
        if(number%i==0){
            if(i!=number){
           count = count+i
            }
        }
    }
    return count;
    }
    

perfectNumbers();