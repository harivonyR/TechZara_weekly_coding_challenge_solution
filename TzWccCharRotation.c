/*
Description (TzWccCharRotation)

Given n Strings s1, s2, ..., sn each consisting of lowercase English letters.

For this question, a single rotation of a String is defined as erasing the first character and appending it to the end of the String.

For example:
Given String = "ramanonaka", then one rotation of this string will return "amanonakar".

Find the minimal number of rotations needed to perform in order to make all the n Strings equal.

NOTE :

If it is impossible to convert all the Strings into one desired String, then return -1.

Input : n = 2 & arrayString = [ "jaojaoby" , "ojaobyja" ]
Output : TzWccCharRotation(n,arrayString) = 2
Explanation :
Self Explanatory.

Input : n = 3 & arrayString = [ "k" , "k" , "k" ]
Output : TzWccCharRotation(n,arrayString) = 0
Explanation :
Self Explanatory.

Input : n = 3 & arrayString = [ "aa" , "aa" , "ab" ]
Output : TzWccCharRotation(n,arrayString) = -1
Explanation :
It is impossible to convert the third String into first two Strings by using above mentioned rotation technique.

[execution time limit] 1 seconds (c)

[input] integer n

1 ≤ n < 10

[input] array.string arrayStringToRotate

Lengths of each strings are equal.

Lengths of each string is positive and does NOT exceed 50.

[output] integer

The minimal number of rotations required in order to make all the strings equal.
*/


#include <pthread.h>

int TzWccCharRotation(int n, arr_string arrayStringToRotate) 
{


int lengthWord = strlen(arrayStringToRotate.arr[0]);
char *tmp = malloc (sizeof(char)*lengthWord);

void rotate (char *word)
{
    char t = word[0];
    int i = 0;
    while (i<(lengthWord-1))
    {
        word[i]=word[i+1];
        i++;
    }
        word[lengthWord-1] = t;
}


int i,min=(n*n);
int *counter = malloc (sizeof(int)*n);
for (i=0; i<n;i++)
{
    int j;
    for (j=0;j<n;j++)
        {
            int tentative = 0;
            strcpy(tmp,arrayStringToRotate.arr[j]);
            while(strcmp(arrayStringToRotate.arr[i],tmp))
            {
            rotate(tmp);
            printf("-i-");
            counter[i]=counter[i]+1;
            tentative = tentative + 1;
            if (tentative > lengthWord ) return(-1);
            }           
        } 
    if(counter[i]<min)min=counter[i];
}
return(min);
}
