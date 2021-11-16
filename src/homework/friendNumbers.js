function friendNumbers(number1,number2) {
    if(factorization(number1)===number2 || factorization(number2)===number1){
        console.log("Friend numbers");
    }
    else{
        console.log("Not friend numbers")
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
