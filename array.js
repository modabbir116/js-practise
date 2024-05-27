// JavaScript Arrays
let arr = [];
console.log(typeof arr);
console.log("==================");
// using the arr constructor
let arr1 = new Array("Apple", "Orange", "Pinaple", "Mango")
console.log(arr1);
console.log("==================");
// using Array literal
let fruit = ["Banana", "Orange", "Apple", "Mango"];
for(let i = fruit.length -1; i>= 0; i--){
    console.log(fruit[i]);
}
console.log(" for of loop ==================");
// array traversal / iterating over arrays
const myName = ["Modabbir", "Masum", "Nuruddin", "Mamun", "Jahid", "Ratul"];
// for of loop
for(item of myName){
    console.log(item);
}
console.log(" for loops ==================");
// for loops 
for(let item = 0; item<myName.length; item++){
    console.log(myName[item]);
}
console.log("while loops ==================");
// while loops 
let items = 0;
while(items<myName.length){
    console.log(myName[items]);
    items++
}

// Do While loops 
