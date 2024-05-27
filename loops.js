// JavaScript While Loop
let i = 1; //======== initializer
while(i<=10){ // ========== condition

    console.log("5 " + "X " + i + " = " + i * 5);
    i++ //=============== interation
}
console.log("=====================");

// The Do While Loop
let ii = 1;
do{
    console.log("3 " + "X " + ii + " = " + ii * 3);
    ii++
}while(ii<=10)

// let userInput;
// let positiveNumber;
// do{
//     userInput = prompt("enter any positive number");
//     positiveNumber = parseFloat(userInput);
// }while(isNaN(positiveNumber) || positiveNumber < 0)
// console.log("youe entired a valid positive number", positiveNumber);
// document.getElementById("demo").innerHTML = positiveNumber ;
    
console.log("=====================");
// JavaScript For Loop
for(let i = 1; i<= 5; i++){
    let partern = "";
    for(let j = 1; j <= i; j++){
        partern += " *"
    }
    console.log(partern);
}