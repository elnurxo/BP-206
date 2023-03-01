//1
var numbers = [3,6,9,2,4,1];
var sum = 0;
var count = 0;
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] % 3 == 0) {
    sum += numbers[i];
    count++;
  }
}
var avg = sum / count;
console.log(avg);


var sum2 = 0;
for (var i= 0;i<numbers.length;i++)
{
    if (number>=100)
    {
        sum2 += number;
    }
}
console.log(sum2)