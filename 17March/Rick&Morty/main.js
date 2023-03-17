let API_URL = "https://rickandmortyapi.com/api/character";
let list = document.querySelector("ul");

fetch(API_URL)
.then(res => res.json())
.then(data => {
    data.results.forEach(character => {
        list.innerHTML += ` <li style="border:1px solid red; width:25%">
        <img width="100" height="100" src="${character.image}" alt="">
        <h5><b>Name:</b> <a href="detail.html?id=${character.id}" target="_blank">${character.name}</a></h5>
        <p><b>Gender:</b> ${character.gender}</p>
    </li>`;
    });
})

//search
let input = document.querySelector("input");

input.addEventListener("keyup",function(){
    list.innerHTML = "";
    fetch(API_URL)
    .then(res => res.json())
    .then(data => {
        data.results.forEach(character => {
            if (character.name.toLowerCase().trim().includes(input.value.toLowerCase().trim())) {
                list.innerHTML += `<li style="border:1px solid red; width:25%">
                <img width="100" height="100" src="${character.image}" alt="">
                <h5><b>Name:</b> <a href="detail.html?id=${character.id}" target="_blank">${character.name}</a></h5>
                <p><b>Gender:</b> ${character.gender}</p>
            </li>`
            }
        });
    })
});
