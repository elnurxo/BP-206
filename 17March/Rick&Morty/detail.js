let id = new URLSearchParams(location.search).get("id");
let API_URL = `https://rickandmortyapi.com/api/character/${id}`;
let wrapper = document.querySelector(".wrapper");

fetch(API_URL)
.then(res => res.json())
.then(data => {
    wrapper.innerHTML = `<h4>Name: ${data.name}</h4>
    <p>Status: ${data.status}</p>
    <p>Gender: ${data.gender}</p>
    <img width="250" height="250" src="${data.image}" alt="">
    <p>Species: ${data.species}</p>`
});

