/*TzWccS3FindTheSum

You have an array of integers,
find a number which is the sum of 1 to n numbers in this array, and which is the closest to a number "num".
If you found two results, have your function return the highest one. For example, num = 27, and you found 26 and 28 as the nearest sum, return 28.
A number in the table can only be used once.

Input:

numbers: array of integers, have at least one item
num: integer, the reference number
Output: integer

[execution time limit] 4 seconds (js)

[input] array.integer numbers

have at least one item

[input] integer num

the reference number

[output] integer */

function TzWccS3FindTheSum(numbers, num) 
{
    var index = [0];
    var nearest = 10000000;
    function isNThere (number,n)
    {
        for (var i=0; i<numbers.length;i++)
        {
            if (number[i]==n) return 0;
        }
        return 1;
    }

        while (index.length<(numbers.length*100))
        {
            var sum= 0;
            for (var j=0;j<numbers.length;j++)
            {
                bin = Math.floor(Math.random() * 2);
                if (bin)
                {
                    sum = sum + numbers[j];
                    if (isNThere(index,sum))
                    {
                        index.push(sum);
                        if (Math.abs(sum-num)<Math.abs(nearest-num)) 
                        {
                            nearest = sum;
                        }
                    }
                }
            }
        }  
return nearest;

}