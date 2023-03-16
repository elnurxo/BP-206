let API_URL = "https://jsonplaceholder.typicode.com/users";
let list = document.querySelector("ul");

fetch(API_URL)
.then((response)=>response.json())
.then(data => {
    for (let i = 0; i < data.length; i++) {
       list.innerHTML += `<li>${data[i].address.city} <a href="http://www.${data[i].website}" target="_blank">${data[i].website}</a></li>`;
    }
});