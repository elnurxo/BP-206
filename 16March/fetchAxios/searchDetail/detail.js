let id = new URLSearchParams(location.search).get("id");

let API_URL_DETAIL = `https://northwind.vercel.app/api/categories/${id}`;
let idData = document.querySelector(".box h4 span");
let nameData = document.querySelector(".box h3 span");
let descData = document.querySelector(".box p span");

fetch(API_URL_DETAIL)
.then(res => res.json())
.then(data =>{
   idData.textContent = data.id;
   nameData.textContent = data.name;
   descData.textContent = data.description;
})