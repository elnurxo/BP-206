var numbers = [3,5,1,7,3,4,4,8,4,8];
//output - max: 4, count:3
var max = numbers[0];
var count = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]>max) {
        max = numbers[i];
    }
    else if(max==numbers[i]){
        count++;
    }
}


console.log('max: ',max);
console.log('count: ',count);