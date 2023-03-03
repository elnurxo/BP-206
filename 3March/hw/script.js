//1. Verilmiş ədədlər siyahısını artan sıra ilə düzülmüş ədədlər halına gətirən alqoritm.

// let arr = [3,1,7,5,9,6,11,4];
// let temp;
// //selection sorting
// for (let i = 0; i < arr.length; i++) {
//    for (let j = i+1 ; j < arr.length; j++) {
//         if(arr[i]>arr[j]){
//             temp = arr[i];
//             arr[i]= arr[j];
//             arr[j]=temp;
//         }
//    }
// }
// console.log(arr)
//bubble sorting
// let arr2 = [5,1,4,7];
// let tempData;
// for (let index = 0; index < arr2.length-1; index++) {
//    if (arr2[index]>arr2[index+1]) {
//     tempData = arr2[index];
//     arr2[index] = arr2[index+1];
//     arr2[index+1] = tempData;
//    }
// }
// console.log('bubble sort: '+arr2);

//Verilmiş iki ədədlər siyahısından birincisinin ikincisinin içində olub
//olmadığını tapan alqoritm.Yəni birinci array-dəki ədədlərin hamısı
//2ci array-də də varsa true çıxır output-a , hər hansısa biri yoxdursa false

// let arr = [1, 2, 3, 3];
// let arr2 = [2, 4, 6, 1, 3, 2, 10, 9];
// let count = 0;
// let found = false;

// for (let i = 0; i < arr.length; i++) {
//   count = 0;
//   for (let j = 0; j < arr2.length; j++) {
//     if (arr[i] == arr2[j]) {
//       found = true;
//       count++;
//       break;
//     }
//   }
//   if (count==0) {
//     break;
//   }
// }
// if (found==true) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// if (count == arr.length) console.log(true);
// else console.log(false);

//-------------------------------------
//Verilmiş artan sıra ilə düzülmüş ədədlər siyahısındaki n ədədinin 
//yerləşdiyi indexi tapan alqoritm (binary search)

let numbers = [1,3,4,5,6,8,9,11,21];
let targetValue = 9; //output --> 6
// BINARY SEARCH
let start = 0;
let end = numbers.length-1;
let found = false;
while (start<=end) {
    let mid = Math.floor((start+end)/2);
    if (targetValue==numbers[mid]) {
        console.log('result is: '+mid);
        found=true;
        break;
    }
    else if(numbers[mid]<targetValue)
        start = mid+1;
    else
        end = mid-1;
}
if (!found)
    console.log(-1);



