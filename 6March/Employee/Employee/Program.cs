using System.Diagnostics.Metrics;
using System;

namespace Employee
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Başlanğıcda boş bir array-iniz olsun və layihəni run etdikdə sizdə enter new employee istəsin.
            //Hər dəfə add etdikdən sonra do you want to continue soruşsun və əgər yes daxil etsəniz 
            //yeni employee-ni əlavə edin və nə vaxt ki, no daxil etsəniz o zaman layihəni dayandırıb 
            //employee - ləri console - a versin. (C# dilində)

            string[] employees = new string[0];
            bool cntn = true;

            do
            {
                Console.Write("enter new employee: ");
                string employee = Console.ReadLine();
                Array.Resize(ref employees, employees.Length + 1);
                employees[employees.Length - 1] = employee;

                Console.WriteLine("Do you want to continue?");
                Console.Write("y for yes, n for no ---");
                char answer = Convert.ToChar(Console.ReadLine());

                if (answer == 'y' || answer=='Y')
                {
                    continue;
                }
                else if(answer == 'n' || answer == 'N')
                {
                    cntn = false;
                }
            } while (cntn);
            Console.WriteLine("------------------------");
            for (int i = 0; i < employees.Length; i++)
            {
                Console.WriteLine($"{i + 1}. {employees[i]}");
            }

        }
    }
}