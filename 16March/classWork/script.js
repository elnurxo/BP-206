let btn = document.createElement("button");
btn.classList.add("btn");
btn.classList.add("btn-success");
btn.textContent = "Add";
let row = document.querySelector(".row");
let wrapper = document.querySelector(".wrapper");
let colorInput = document.createElement("input");
colorInput.setAttribute("type","color");
wrapper.append(btn,colorInput);



//button click
btn.addEventListener("click",function(){
    // if (!box.classList.contains("active")) {
    //     box.classList.add("active");
    // }
    // else{
    //     box.classList.remove("active");
    // }
    // box.classList.toggle("active");
    
    let box = document.createElement("div");
    box.classList.add("box");
    let color = colorInput.value;
    box.style.backgroundColor = color;
    let column = document.createElement("div");
    column.classList.add("col-1");
    column.classList.add("my-2");
    column.append(box);
    row.append(column);
});