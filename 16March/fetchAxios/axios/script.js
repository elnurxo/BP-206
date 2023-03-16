let API_URL = "https://jsonplaceholder.typicode.com/users";
let list = document.querySelector("ul");

axios.get(API_URL)
.then((response)=>{
    let check = false;
    for (let i = 0; i < response.data.length; i++) {
        if (response.data[i].id>5) {
            check = true;
        }
        else{
            check = false;
        }
        list.innerHTML += `<li style="color: ${check ? "red" : "black"}">${response.data[i].name}</li>`
    }
});