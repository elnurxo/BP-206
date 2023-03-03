using System;

namespace Arrayhw
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] numbers = { 1, 2, 3, 4,6 ,7 ,8 };
            foreach (int number in numbers)
            {
                Console.WriteLine(number);
            }
            Console.WriteLine("-----------------");

                Console.Write("enter new element: ");
                string numStr = Console.ReadLine();
                int num = Convert.ToInt32(numStr);
            Array.Resize(ref numbers, numbers.Length+1);
            numbers[numbers.Length - 1] = num;
            Console.WriteLine("new item added to array...");
            foreach (var num2 in numbers)
            {
                Console.WriteLine(num2);
            }



            ////1. Verilmis ededler siyahisindaki 3-e bolunen ededlerin ededi oratsini tapan alqoritm

            //int[] numbers = { 111, 23, 411, 5, 6, 7, 8, 82, 9, 3, 12 };
            //int sum = 0;
            //int count = 0;
            //for (int i = 0; i < numbers.Length; i++)
            //{
            //    if (numbers[i]%3==0)
            //    {
            //        sum += numbers[i];
            //        count++;
            //    }
            //}
            //double avg = sum/count;
            //Console.WriteLine("avegare of the numbers is: "+avg);

            ////2.Verilmis ededler siyahisinda reqemlerinin sayi 2-den boyuk olan ededlerin cemini tapan alqoritm
            //int sum2 = 0;
            //foreach (int number in numbers)
            //{
            //    if (number>=100)
            //    {
            //        sum2 += number;
            //    }
            //}
            //Console.WriteLine(sum2);

            ////3. Vermilmis ededler siyahisindaki en boyuk eded ve en kicik ededin ededi ortasini tapan alqoritm
            //double[] nums = { 12, 15, 17, 21, };
            //double maxNumbers = nums[0];
            //double minNumbers = nums[0];

            //for (int i = 0; i < nums.Length; i++)
            //{
            //    if (nums[i] < minNumbers) 
            //    minNumbers = nums[i];
            //    if (nums[i] > maxNumbers) 
            //    maxNumbers = nums[i];

            //}
            //Console.WriteLine((maxNumbers + minNumbers) / 2);


            ////4.Verilmis adlar siyahisindaki adi 'A' herfi ile baslayanlarin sayini tapan alqoritm
            //string[] names = { "Aydan", "Eldar", "Aytac", "Abdulla", "Hecer" };
            //int counter = 0;
            //for (int i = 0; i < names.Length; i++)
            //{
            //    if (names[i][0]=='A')
            //    {
            //        counter++;
            //    }
            //}
            //Console.WriteLine("adi A ile baslayanlarin sayi: "+counter);


            ////task 5
            //int[] numbers3 = { 3, 5, 1, 7, 3, 4, 4, 8, 4, 8, 9 ,9 , 9 };
            ////output - max: 4, count:3
            //var max = numbers3[0];
            //var count2 = 1;
            //for (var i = 1; i < numbers3.Length; i++)
            //{
            //    if (numbers3[i] > max)
            //    {
            //        max = numbers3[i];
            //    }
            //    else if (max == numbers3[i])
            //    {
            //        count2++;
            //    }
            //}

            //Console.WriteLine("---------------");
            //Console.WriteLine(max);
            //Console.WriteLine(count2);


        }
    }
}