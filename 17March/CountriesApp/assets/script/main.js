let API_URL = "https://restcountries.com/v3.1/all";
let cardsWrapper = document.querySelector(".cards-row");

//Get All Countries
fetch(API_URL)
.then(resp => resp.json())
.then(data => {
    data.forEach(country => {
        cardsWrapper.innerHTML += `<div class="col-lg-3 col-sm-12">
        <div class="card">
            <img height="175" class="card-img-top" src="${country.flags.png}" alt="${country.flags.alt}">
            <div class="card-body">
              <h5 class="card-title"><a href="detail.html">${country.name.common}</a></h5>
              <div class="card-data">
                <p><b>Population:</b> <span>${country.population}</span></p>
                <p><b>Region:</b> <span>${country.region}</span></p>
                <p><b>Capital:</b> <span>${country.capital}</span></p>
              </div>
            </div>
          </div>
    </div>`
    });
})

//Dark Mode
let modeWrapper = document.querySelector(".mode-wrapper");
let icon = document.querySelector(".fa-solid");
let nav = document.querySelector("nav");
let main = document.querySelector("main");
let input = document.querySelector("#search");
let select = document.querySelector("#select");
let header = document.querySelector("header");

//Mode Switch Button
modeWrapper.addEventListener("click",()=>{

    //dark mode
    if (icon.classList.contains("fa-moon")) {
        icon.classList.replace("fa-moon","fa-sun");
        icon.parentElement.nextElementSibling.textContent = "Light Mode";
        nav.classList.add("dark-nav");
        main.classList.add("dark-main");
        input.classList.add("dark-input");
        select.classList.add("dark-select");
        header.classList.add("dark-header");

        //cards
        let cards = cardsWrapper.children;
        for (let i = 0; i < cards.length; i++) {
            cards[i].children[0].style.backgroundColor = "rgb(43,56,68)";
            cards[i].children[0].style.color = "white";
        }
    }
    //light mode
    else{
        icon.classList.replace("fa-sun","fa-moon");
        icon.parentElement.nextElementSibling.textContent = "Dark Mode";
        nav.classList.remove("dark-nav");
        main.classList.remove("dark-main");
        input.classList.remove("dark-input");
        select.classList.remove("dark-select");
        header.classList.remove("dark-header");

         //cards
         let cards = cardsWrapper.children;
         for (let i = 0; i < cards.length; i++) {
             cards[i].children[0].style.backgroundColor = "white";
             cards[i].children[0].style.color = "black";
         }
    }
});

//Search Country by Name
input.addEventListener("keyup",()=>{
    axios.get(API_URL)
    .then(resp => {
        //empty row
        cardsWrapper.innerHTML = "";

       resp.data.forEach((country)=>{
            if (country.name.common.toLowerCase().trim().includes(input.value.toLowerCase().trim())) {
                cardsWrapper.innerHTML += `<div class="col-lg-3 col-sm-12">
                <div class="card">
                    <img height="175" class="card-img-top" src="${country.flags.png}" alt="${country.flags.alt}">
                    <div class="card-body">
                      <h5 class="card-title"><a href="detail.html">${country.name.common}</a></h5>
                      <div class="card-data">
                        <p><b>Population:</b> <span>${country.population}</span></p>
                        <p><b>Region:</b> <span>${country.region}</span></p>
                        <p><b>Capital:</b> <span>${country.capital}</span></p>
                      </div>
                    </div>
                  </div>
            </div>`
            }
       })
    })
});