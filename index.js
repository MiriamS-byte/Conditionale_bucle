console.log("Hello");

let userAge = 15;
let legalAge = 18;

if(userAge >= legalAge){
    console.log("Utilizatorul este major.");
}

// if - else
if(userAge >= legalAge){
    console.log("Utilizatorul este major.");
}else {
    console.log("Utilizatrul este minor.");
}

//operator ternal (conditional)
let userEnteredPass = "pass123";
let correctPass = "123pass";
// let accessGranted;

// if(userEnteredPass === correctPass){
//     accessGranted = true;
// }else{
//     accessGranted = false;
// } console.log("User has access: ", accessGranted);

let accessGranted = userEnteredPass === correctPass ? true : false;
console.log("User has access: ", accessGranted);

userEnteredPass = "123pass";
let accessMessage = userEnteredPass === correctPass ? "Access granted" : "Acces denied";
console.log("User has access: ", accessMessage);


//if - else if - else = execut in functie de mai multe conditii
let actualScore = 69;
let minimumScore = 50;
let averegeScore = 70;
let maxScore = 100;

if(actualScore === 100){
    console.log("Congrats, your score is perfect!", actualScore, "points");
}else if(actualScore < maxScore && actualScore > averegeScore){
    console.log("Congrats, your score is great!", actualScore, "points");
}else if(actualScore <= averegeScore && actualScore >= minimumScore){
    console.log("Congrats, you've got a passing score !", actualScore, "points");
}else if(actualScore < minimumScore){
    console.log("We are sory! Your score is to low!", actualScore, "points");
}else {
    console.log("Your score could not be verified")
}


//switch (cases)

let weekDay = 6;

switch(weekDay){
    case 1:  
        console.log("Astazi este luni");
    break;

    case 2:
        console.log("Astazi este marti");
    break;

    case 3:
        console.log("Astazi este miercuri");
    break;

    case 4:
        console.log("Astazi este joi");
    break;

    case 5:
        console.log("Astazi este vineri");
    break;

    case 6:
        console.log("Astazi este sambata");
    break;

    case 7:
        console.log("Astazi este duminica");
    break;

    default:
        console.log("Ziua nu a fost identificata");
    break;
}

//loops

//while

let cartItems = [
    {
    name : "Iphone 5",
    price : 1700,
    curency : "$",
    amount : 1,
    },
    {
        name : "Protector sleev",
        price : 100,
        curency : "$",
        amount : 3,
    },
    {
        name : "Apple sticker",
        price : 21.99,
        curency : "$",
        amount : 4,
    }
]

let totalPrice = 0;
let productIndex = 0;
while(productIndex < cartItems.length){
    let product = cartItems[productIndex];
    totalPrice = totalPrice + product.price * product.amount;
    // productIndex += 1;
    productIndex ++ ;
} console.log("Your cart total is: ", totalPrice, cartItems[0].curency);

//do - while

let n = 5;
let currentNumber = 0;
 do {
    currentNumber++;
    console.log(currentNumber);
 } while(currentNumber < n);


 //for

 let totalPrice2 = 0;
 for(i = 0; i < cartItems.length; i++){
    let product = cartItems[i];
    totalPrice2 = totalPrice2 + product.price * product.amount;
 }  console.log("Your cart computed with 'for' total is: ", totalPrice2, cartItems[0].curency);

 //for - of
 let totalPrice3 = 0;
 for( let product of cartItems){
    totalPrice3 += product.amount * product.price;
 }  console.log("Your cart computed with 'for of' total is: ", totalPrice3, cartItems[0].curency);


 //for in
 let iphone =     {
    name : "Iphone 5",
    price : 1700,
    curency : "$",
    amount : 1,
    };

for(let key in iphone) {
    console.log("key: ",key);
}

//use of "break" - gasirea indexului intr-un array
const numbers = [, 7, 8, 12, 91];
let numberToCheck = 8;
for(j = 0; j < numbers.length; j++){
    console.log("i: ", j);
    if(numberToCheck === numbers[j]){
        console.log("Number ", numberToCheck, "is found at ", j, "!");
        break;
    }
}

//use of continue - calcularea sumei primelor n nr pare
let firstN = 10;
let sum = 0;
for(i = 1; i <= firstN ; i++){
    if(i % 2 !== 0 ){
        continue;
    }

    sum += i;
}   console.log("Suma primelor ",firstN, " numere pare este: ", sum);