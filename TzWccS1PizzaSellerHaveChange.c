/*TzWccS1PizzaSellerHaveChange:

You are a seller at Gastro Pizza , each pizza costs 5Ar.

Customers are standing in a queue to buy from you, and order one pizza at a time.

Each customer will only buy one pizza and pay with either a 5Ar, 10Ar, or 20Ar bill. You must provide the correct change to each customer, so that the net transaction is that the customer pays 5Ar.

Note that you don't have any change in hand at first.

Return true if and only if you can provide every customer with correct change.

Example 1:

For: bills = [5,5,5,10,20]
The output shoud be TzWccS1PizzaSellerHaveChange(bills) = true

Explanation:

From the first 3 customers, we collect three 5Ar bills in order = 15Ar.
From the fourth customer, we collect a 10Ar bill and give back a 5Ar.
From the fifth customer, we give a 10Ar bill and a 5Ar bill.
Since all customers got correct change, we output true.
Example 2:
For: bills = [5,5,10]
The output shoud be TzWccS1PizzaSellerHaveChange(bills) = true

Example 3:
For: bills = [10,10]
The output shoud be TzWccS1PizzaSellerHaveChange(bills) = false

[execution time limit] 1 seconds (c)

[input] array.integer bills

0 <= bills.length <= 10000
5 <=bills[i] <= 20

[output] boolean

Return true if pizza seller have change.

*/

bool TzWccS1PizzaSellerHaveChange(arr_integer bills) {

    int billsFiveRemain = 0;
    for(int i=0; (i<bills.size);i++)
    {
        if (bills.arr[i]==5)
        {
            billsFiveRemain ++ ;
            bills.arr[i]=0;
        }

        else if(bills.arr[i]>5) 
        {
            if (billsFiveRemain==0) 
                return false;
            bills.arr[i] = bills.arr[i] - 5;
            billsFiveRemain ++;

            for (int j=1;(j<=billsFiveRemain)||(bills.arr[i]==0);j++)
            {
                bills.arr[i] = bills.arr[i] - 5;
                billsFiveRemain -- ;
            }                
        }
        else return (-1);
    }
}
