//dom manipulation
console.log(document);

// // get element by id
// let title = document.getElementById("title");
// console.log(title);

// // get elements by class name
// let paragraphList = document.getElementsByClassName("paragraph");
// console.log(paragraphList);

// // get elements by tag name
// let span = document.getElementsByTagName("span");
// console.log(span);

// let title = document.querySelector("#title");
// console.log(title);

// let paragraph = document.querySelector(".paragraph");
// console.log(paragraph);

// let span = document.querySelector("span");
// console.log(span);

// let allP = document.querySelectorAll(".paragraph");
// for (let index = 0; index < allP.length; index++) {
//     console.log(allP[index]);
    
// }

// let spanAll = document.querySelectorAll("span");
// console.log(spanAll);

//----------------------------
let title = document.querySelector("#title");

//innerText, textContent, innerHtml
// title.textContent = "Hello World";
// title.innerText = "Hello World 2";

// title.innerHTML = "<ul><li>salam</li></ul>";

// title.style.color = "red";
// title.style.fontSize = "40px";
// title.style.backgroundColor = "yellow";

let btn = document.querySelector("button");

// btn.addEventListener("click",function() {
//     title.textContent = "Clicked!";
//     title.style.color = "red";
// });

// btn.addEventListener("click",()=> {
//     title.textContent = "Clicked!";
//     title.style.color = "red";
// });


//----------------------------------
let list = document.querySelector("ul");
let addBtn = document.querySelector("#add-number");
let clearBtn = document.querySelector("#clear");
let count = 1;

//add button event
addBtn.addEventListener("click",function(){
   if (count<=5) {
    list.innerHTML += `<li>${count}</li>`;
    count++;
   }
});
//clear button event
clearBtn.addEventListener("click",function(){
    list.innerHTML = "";
})

//-------------------------
let students = document.querySelector("#students");
let addStudent = document.querySelector("#add-student");
let clearStudents = document.querySelector("#clear-student");
let input = document.querySelector("input");
let errorMsg = document.querySelector("#message");

addStudent.addEventListener("click",function(){
   if (input.value!="") {
    students.innerHTML += `<li>${input.value}</li>`;
    input.value = "";
    errorMsg.style.display = "none";
   }
   else{
    errorMsg.style.display = "block";
   }
});

clearStudents.addEventListener("click",function(){
    students.innerHTML = "";
});

