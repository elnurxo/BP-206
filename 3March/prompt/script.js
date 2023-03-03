let num1Str = window.prompt("enter first number");
let num1 = parseInt(num1Str);
let num2Str = window.prompt("enter second number");
let num2 = parseInt(num2Str);
let operation = prompt("enter your operation");
let result;
switch (operation) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    result = num1 / num2;
    break;
  default:
    result = undefined;
    break;
}
if (result!==undefined)
    window.alert('result is: '+result);
else
    window.alert('invalid operation!');
