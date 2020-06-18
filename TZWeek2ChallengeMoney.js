/*TZWeek2ChallengeMoney
Your task is to find the decomposition of an amount of money into a banknote/coin.

Input

amount: float, the amount to decompose
availableBankNote: array of floats, the list of available banknote or coin for the currency, ordered from the smallest to the largest
Output
Your program will return an array of floats which is the list of banknote or coin that forms the composition of the input amount
The list will be ordered DESC (from the largest to the smallest)
You must return the composition that has the smallest number of banknote or coin
If the amount cannot be decomposed, your fucntion will return [-1]

Example 1: (case of Ariary)
amount = 12500
availableBankNote = [0.20, 1, 2, 2.5, 4, 5, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000, 20000]
Output: [10000, 2000, 500]

Example 2:
amount = 165200
availableBankNote = [0.20, 1, 2, 2.5, 4, 5, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000, 20000]
Output: [20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 5000, 200]

Example 3:
amount = 11.31
availableBankNote = [0.20, 1, 2, 2.5, 4, 5, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000, 20000]
Output: [-1]

[execution time limit] 4 seconds (js)

[input] float amount

the amount to decompose

[input] array.float availableBankNote

the list of available banknote or coin

[output] array.float*/

function TZWeek2ChallengeMoney(amount, availableBankNote) 
{

function digits_count(n) 
{ 
    var count = 0; 
    if (n >= 1) ++count; 
    while (n / 10 >= 1) { n /= 10; ++count; } 
    return count;
}

var _length = digits_count(amount);


var tmp = new Array ;
var raw = new Array;
var j;
    for(j=0;j<availableBankNote.length;j++)
    {
        tmp[j] = availableBankNote [availableBankNote.length-j-1];
    }
    var i=0; var c=0;
    for(i=0;i<tmp.length;i++)
    {
        if((amount-tmp[i])>=0)
        {
            amount = (amount - tmp[i]);
            raw[c]=tmp[i];
            i=i-1;
            c=c+1;
            console.log(amount);
        }
        else continue;
    }
    if (amount<0) return([-1]);
    else return (raw);

}