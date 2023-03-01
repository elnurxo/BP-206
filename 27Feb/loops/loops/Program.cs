// See https://aka.ms/new-console-template for more information


int num = 222;

int num1,num2,num3, num4;

num1 = num % 10;
num = (num - num1) / 10;
num2 = num % 10;
num = (num - num2) / 10;
num3 = num % 10;
num = (num - num3) / 10;
num4 = num % 10;


if (num1==num4 && num2==num3)
{
    Console.WriteLine(true);
}
else
{
    Console.WriteLine(false);
}

