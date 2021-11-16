//fonksiyon
function addToCart(quantity,productName="elma") {
    console.log("sepete eklendi "+productName);
}
addToCart(2);


//değişkene fonksiyon atama
let sayHello = () => {
    console.log("hello World");
}
sayHello();


//diğer kullanım şekli
let sayHello2 = function () {
    console.log("hello World 2");
}
sayHello2();

//-----------------------------------------------------



function addToCart2(productName,quantity,unitPrice) {
    
}

function addToCart3(product) {
    console.log(product);
}
let product1 = {productName:"elma",unitPrice:2.5,quantity:2};
addToCart3(product1);



//-----------------------------------------------------
let products = [
    {productName:"elma",unitPrice:2.5,quantity:2},
    {productName:"armut",unitPrice:3.5,quantity:3},
    {productName:"karpuz",unitPrice:4.5,quantity:4},
]

function addToCart4(x) {
    console.log(x);
}
addToCart4(products);



//--------------------- operatörlere giriş
function add(bisey,...numbers) { //rest operator
    let total=0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    console.log(total);
    console.log(bisey);
}
add(20,30,40);

console.log(Math.max(1,2,3,4,5));
let numbers = [50,80,600,20,90]
console.log(Math.max(...numbers));

//-------------------- ÖNEMLİ!!!!
let[icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu",poplulation:"20M"},
    {name:"Marmara",poplulation:"10M"},
    {name:"Karadeniz",poplulation:"30M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]

console.log(...icAnadoluSehirleri)


//---------------------
let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity } 
= {productName:"Elma", unitPrice:10, quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)