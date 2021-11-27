//referans tipler örneği 
let cart = [
    {id:1,productName:"Telefon",quantity:2,unitPrice:2500},
    {id:2,productName:"Bardak",quantity:3,unitPrice:100},
    {id:3,productName:"Kalem",quantity:4,unitPrice:10},
    {id:4,productName:"Şarj Cihazı",quantity:5,unitPrice:20},
    {id:5,productName:"Kitap",quantity:6,unitPrice:40},
    {id:6,productName:"Pot",quantity:7,unitPrice:150}
]

cart.map(product=>{
    console.log(product.productName + " : " + product.unitPrice*product.quantity)
});

let total  = cart.reduce((acc,product)=>acc+product.unitPrice,0)



let quantityOver2 = cart.filter(p=>p.quantity>2);
console.log(quantityOver2)


function refTest(sepet) {
    sepet.push({id:7,productName:"Kılıf",quantity:8,unitPrice:50})
}

refTest(cart);
console.log(cart);
//------------

//sayıyı number'a atattık ve sayi değişkeni ile işimiz bitti yanı sayi 10 olarak kaldi
let sayi = 10;
function sayıTopla(number) {
    number +=1;
}
console.log(sayi);
sayıTopla(sayi);
