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