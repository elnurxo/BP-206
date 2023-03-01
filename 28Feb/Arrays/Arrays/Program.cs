namespace Arrays
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] nums = { 1, 2, 3, 4, 5, 7, 6, 8 };

            //for (int i = 0; i < nums.Length; i++)
            //{
            //    Console.WriteLine(nums[i]);
            //}

            foreach (int number in nums)
            {
                Console.WriteLine(number);
            }
        }

    }
}