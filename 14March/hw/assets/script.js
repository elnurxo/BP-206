let fName = document.querySelector("#student-name");
let sName = document.querySelector("#student-surname");
let age = document.querySelector("#student-age");
let email = document.querySelector("#student-email");
let genders = document.querySelectorAll(".gender");
let submitBtn = document.querySelector("button");
let tBody = document.querySelector("tbody");
let errorMsg = document.querySelector(".errorMsg");

//click event
submitBtn.addEventListener("click",function(e){
   e.preventDefault(); //disables form from refreshing
   
   let selectedGender = undefined;
   genders.forEach(gender => {
        if (gender.checked) {
            selectedGender = gender.value;
            gender.checked = false;
        }
   });

   if (fName.value.trim()!=="" && sName.value.trim()!=="" && age.value.trim()!=="" && email.value.trim()!=="" && selectedGender!==undefined) {
        errorMsg.style.display = "none";
        
        //add data into table
        tBody.innerHTML += `<tr>
        <td>${fName.value}</td>
        <td>${sName.value}</td>
        <td>${age.value}</td>
        <td>${selectedGender}</td>
        <td>${email.value}</td>
      </tr>`

      //reset inputs
      fName.value = "";
      sName.value = "";
      age.value = "";
      email.value = "";


   }
   else{
        errorMsg.style.display = "block";
   }
});
