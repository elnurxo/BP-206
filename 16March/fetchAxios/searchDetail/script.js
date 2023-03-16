let input = document.createElement("input");
input.setAttribute("placeholder","search by name");
input.classList.add("form-control");
input.style.width = "20%";
//get body from HTML
let body = document.querySelector("body");
let container = document.createElement("div");
container.classList.add("container");
container.classList.add("my-5");
container.append(input);
body.prepend(container);

let list = document.createElement("ul");
let notFound = document.createElement("p");
notFound.classList.add("text-danger");
notFound.textContent  = "Not Found!";
notFound.style.display = "none";
container.append(list,notFound);
let API_URL = "https://northwind.vercel.app/api/categories";

//Get All Categories
fetch(API_URL)
.then((resp)=>resp.json())
.then(data => {
   for (let i = 0; i < data.length; i++) {
        list.innerHTML += `<a href="detail.html?id=${data[i].id}" target="_blank"><li>${data[i].name}</li></a>`
   }
});

//Search Categories by name
input.addEventListener("keyup",function(){
    axios.get(API_URL)
    .then((res) =>{
        list.innerHTML = "";
        let check404 = true;
        for (let i = 0; i < res.data.length; i++) {
           if (res.data[i].name.toLowerCase().includes(input.value.toLowerCase())) {
               list.innerHTML += `<a href="detail.html?id=${res.data[i].id}" target="_blank"><li>${res.data[i].name}</li></a>`;
               notFound.style.display = "none";
               check404 = false;
           }
        }
        if (check404) {
            notFound.style.display = "block";
        }
    })
});


