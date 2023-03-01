var cars = ["Mercedes","Bmw"];
cars[2] = "Opel";

console.log(cars)

console.log(cars.length);
console.log(cars[0]);
console.log(cars[cars.length-1]); //last element
console.log(cars[5]);

var cars1 = [];
cars1[0] = "Mercedes";
cars1[5] = "Bmw";
console.log(cars1[3]);

var cars2 = new Array();
cars[0] = "Mercedes";

//-------------------------------
var fruits = ["Banana","Apple","Kiwi"];
console.log(fruits.length)
fruits[2] = "Pear";
console.log(fruits.length)
var fruits2 = ["Banana","Apple","Ki"];

// fruits = fruits2;

// if (fruits==fruits2) {
//     console.log(true)
// }
// else{
//     console.log(false);
// }
console.log(fruits[-1]);
console.log("----------------------------------");
// for (let i = 0; i < fruits.length; i++) {
//     for (let j = 0; j < fruits2.length; j++) {
//         if (fruits[i]==fruits2[j]) {
//             console.log(true);
//         }
//     }
// }

// var fruit = "Banana";
// var fruit2 = "Banana";

// if (fruit==fruit2) {
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// const nums = [ 3,4,5,6,7,8];
// let max = nums[0];

// for (let i = 1; i < nums.length; i++) {
//     if (nums[i]>max) {
//         max = nums[i];
//     }
// }
// console.log(max);

// let names = ["Arzu","Inci","Semra","Sovket","Ferid"];

// for (let i = 0; i < names.length; i++) {
//     if (names[i].length>4) {
//         console.log(names[i])
//     }
// }

var student1 = {firstName:"Izzet",lastName:"Abdullayev",age:19};
var student2 = {firstName:"Orxan",lastName:"Qasimov",age:20};
var student3 = {firstName:"Asim",lastName:"Qarashov",age:19};
var student4 = {firstName:"Tahir",lastName:"Hesenli",age:19};

var students = [student1,student2,student3,student4];
var count = 0;
for (let i = 0; i < students.length; i++) {
    if (students[i].age>19) {
        count++;
    }
}
console.log(students);







