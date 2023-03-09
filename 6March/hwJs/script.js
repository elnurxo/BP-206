let finCodes = ["QWE1234","ERT56BN","IOP234Q","CV67NB2"];

let finData=window.prompt("enter fin code!");
let regex = new RegExp("^[A-NP-Z0-9]{7}$");
let userFound = false;

do {
    if (regex.test(finData)) {
        for (let index = 0; index < finCodes.length; index++) {
            if(finCodes[index]===finData){
                window.alert("user found: "+index);
                userFound = true;
                break;
            }
        }
        if (!userFound) {
            finData = window.prompt("user not found, try again!");
        }
    }
    else{
        finData = window.prompt("format is not correct, try again!");
    }
} while (!regex.test(finData) || userFound===false);
