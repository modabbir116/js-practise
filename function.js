// let's make i reusable code 

function sum(a, b){
    return a + b;
}
let student1 = sum(5, 10);
console.log(student1);
let student2 = sum(50, 100)
console.log(student2);
let student3 = sum(500, 300)
console.log(student3);

function txt(){
    console.log("Hello Function");
}
txt()

function sums(){
    let a = 5,
        b = 10 
        console.log(a*b);
}
sums()

function myName(name){
    console.log("Hello My self " + name + ", I'm studen of university of scholars");
}
myName("Modabbir Hossen")


let firstName = "Modabbir";
let lastName = "Hossen";

let fullName = `${firstName} ${lastName}`;
console.log(fullName );

let age = 21;

let myAge = `I am ${age} years old`;
console.log(myAge);


// reveres a String
// write a functio to reverse to string without using built-in reverse method

const isReverse = (s) =>{
    let reverse = "";
    for(let char = s.length - 1; char >= 0; char--){
        reverse+=(s[char]);
    }
    return reverse
}
console.log(isReverse("Masum Hossen"));