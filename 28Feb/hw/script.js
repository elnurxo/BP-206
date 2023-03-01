//TASK 1 - Ədəddəki ən böyük rəqəmi çap edin. 
//Məsələn 43192 ədədində ən böyük rəqəm 9-dur və 9 çap edilməlidir.

// let num = 137530;
// let max = 0;
// while (num>0) {
//     let digit = num%10;
//     num=(num-digit)/10;
//     if (digit>max) {
//         max = digit;
//     }
// }
// console.log(max);

//TASK 2 - Ədəddəki cüt və tək yerdə olan rəqəmləri ayrılıqda cəmləyirik. 
//Bu cəmlərin hasilini tapın. Məsələn, 1243 ədədində tək yerdə 
//duran 1 və 4ün cəmi və cüt yerdə duran 2 və 3ün cəmini tapıb 
//bu cəmlərin hasilini ekrana yazdırın.
// let num = 3542;
// let sumOdd=0;
// let sumEven=0;
// while (num > 0)
// {
//     sumOdd =sumOdd + (num % 10);
//     num = (num - (num%10))/10;
//     sumEven =sumEven + (num % 10);
//     num = (num - (num%10))/10;
// }
// console.log(sumEven*sumOdd);

//TASK 3 - Verilmiş ədədin 2nin qüvvəti olub-olmadığını tapın. 
//Məsələn 8 daxil olunarsa true, 5 daxil olunarsa false çap etməlidir.
// let num = 20;

// while (num%2==0) { //num>1
//     num/=2;
// }

// if (num==1) {
//     console.log(true)
// }
// else{
//     console.log(false);
// }

//TASK 4 - Verilmiş ədədin sadə və ya mürəkkəb olduğunu tapın. 
//(Sadə ədədlər sadəcə 1ə və özünə bölünən ədədlərdir). 
//Əgər sadə ədəddirsə "prime", mürəkkəb ədəddirsə "composite" çap olunsun ekrana. 

// let num = 45274;
// let counter = 0;
// if (num==1 || num==0) {
//     console.log("ne sade ne murekkebdir");
// }
// else{
//     for (let i = 2; i < num/2; i++) {
//         if (num%i==0)
//             counter++;
//             break;
//     }
//     if (counter==1)
//         console.log("murekkeb")
//     else
//         console.log("sade");
// }

//TASK 5 - 1-dən M-ədək ədədlər içərisində 15-ə bölünən ədədlərin sayını tapan alqoritm.

// let M = 234;
// let count = 0;
// for (let i = 0; i < M; i++) {
//     if (i%15==0)
//         count++;
// }
// console.log(count);