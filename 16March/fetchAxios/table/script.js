let API_URL = "https://northwind.vercel.app/api/suppliers";
let tBody = document.querySelector("tbody");

fetch(API_URL)
.then((response)=>response.json())
.then((data) => {
    let check = false;
    for (let i = 0; i < data.length; i++) {
        if (data[i].address.region=='NULL')
            check = true;
        else
            check = false;


        tBody.innerHTML += `<tr style="background-color: ${check ? "red" : ""}">
        <th>${data[i].id}</th>
        <td>${data[i].companyName}</td>
        <td>${data[i].contactTitle}</td>
        <td>${data[i].address.city}</td>
        <td>${data[i].address.region}</td>
      </tr>`
    }
});


// axios.get(API_URL)
// .then((resp) => {
//     let check = false;
//     for (let i = 0; i < resp.data.length; i++) {
//         if (resp.data[i].address.region=='NULL')
//             check = true;
//         else
//             check = false;


//         tBody.innerHTML += `<tr style="background-color: ${check ? "red" : ""}">
//         <th>${resp.data[i].id}</th>
//         <td>${resp.data[i].companyName}</td>
//         <td>${resp.data[i].contactTitle}</td>
//         <td>${resp.data[i].address.city}</td>
//         <td>${resp.data[i].address.region}</td>
//       </tr>`
//     }
// })