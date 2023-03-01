// See https://aka.ms/new-console-template for more information


#region Task 1 example
//Console.Write("enter number: ");
//string numStr = Console.ReadLine();
//int num = Convert.ToInt32(numStr);


//Console.Write("enter second number: ");
//string numStr2 = Console.ReadLine();
//int num2 = Convert.ToInt32(numStr2);

//Console.Write("enter symbol: ");
//string symbolStr = Console.ReadLine();
//char symbol = Convert.ToChar(symbolStr);

//int result;

//switch (symbol)
//{
//    case '+':
//        result = num + num2;
//        break;
//    case '-':
//        result = num - num2;
//        break;
//    case '*':
//        result = num * num2;
//        break;
//    case '/':
//        result = num / num2;
//        break;
//    default:
//        result = 0;
//        Console.WriteLine("invalid input");
//        break;
//}

//Console.WriteLine("-----------------------");
//Console.WriteLine($"result is {result}");

#endregion


#region Task 2 example
string sizeStr;
int size;
do
{
    Console.Write("enter size of array: ");
    sizeStr = Console.ReadLine();

} while (!int.TryParse(sizeStr,out size));


double[] numbers = new double[size];
Console.WriteLine($"{size} length array created!");

for (int i = 0; i < numbers.Length; i++) //size
{
    Console.Write($"{i+1}.enter number: ");
    string numStr = Console.ReadLine();
    double num = Convert.ToDouble(numStr);
    numbers[i] = num;       
}
Console.WriteLine("--------------------------------");
foreach (double number in numbers)
{
    Console.WriteLine(number);
}
#endregion


