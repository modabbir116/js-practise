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
console.log("=========== for loops ==================");
// for loops 
for(let item = 0; item<myName.length; item++){
    console.log(myName[item]);
}
console.log("============ while loops ==================");
// while loops 
let items = 0;
while(items<myName.length){
    console.log(myName[items]);
    items++
}
console.log("=======Do While loops  ==================");
// Do While loops 
let itemss = 0;
do{
    console.log(myName[itemss]);
    itemss++
}while(itemss<myName.length);

console.log("=======for in loops  ==================");
// for in loops 
for(item11 in myName){
    console.log(myName[item11]);
}

console.log("======= forEach Function  ==================");
// JavaScript Array forEach()
myName.forEach((curentValu, index, arr) =>{
    console.log(`${curentValu} ${index}`);
})

console.log("======= Map Function  ==================");
// JavaScript Array map()
myName.map((names, index) =>{
    console.log(names, index);
})