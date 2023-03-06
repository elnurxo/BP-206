//car number regex
let carNoStr = window.prompt("mashinin nomresini daxil et");
const regex = new RegExp('(10|99|90|77)-[A-Z]{2}-[0-9]{3}');

if (regex.test(carNoStr)) {
    window.alert("true")
}
else{
    window.alert("invalid input!")
}

//google word regex
let dataStr = window.prompt("enter your string");
const regexGoogle = new RegExp("g(o*)gle");

if (regexGoogle.test(dataStr)) {
    window.alert(true);
}
else{
    window.alert(false);
}
