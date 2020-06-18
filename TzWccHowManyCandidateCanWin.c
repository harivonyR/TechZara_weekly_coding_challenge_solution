/*TZWeek1ChallengeTask1
Given an array of integers, determine whether there are two distinct indices i and j in the array such that:

The absolute difference between i and j is at most k
The absolute difference between nums[i] and nums[j] is at most t

Example

For nums = [1, 3, 1], k = 2, and t = 1, the output should be
containsNearbyAlmostDuplicate(nums, k, t) = true.

The absolute difference between indices 0 and 2 is 2 (the value of k) and the absolute difference between elements 1 and 1 is 0 (less than the value of t), so this array meets all of the requirements and the output is true.

For nums = [-3, 3], k = 2, and t = 4, the output should be
containsNearbyAlmostDuplicate(nums, k, t) = false.

The absolute difference between -3 and 3 is 6, which is more than the value of t, meaning that the output is false.

[execution time limit] 1 seconds (c)

[input] array.integer nums

Guaranteed constraints:
2 ≤ nums.length ≤ 2 · 10^5,
-2^31≤ nums[i] ≤ 2^31 - 1.

[input] integer k

An integer that represents the highest allowable absolute difference between i and j.

Guaranteed constraints:
1 ≤ k ≤ 10^4.

[input] integer t

An integer that represents the highest allowable absolute difference between nums[i] and nums[j].

Guaranteed constraints:
0 ≤ t ≤ 2^31 - 1.

[output] boolean

Return true if the input array meets the requirements as stated above, otherwise return false.
*/

bool TZWeek1ChallengeTask1(arr_integer nums, int k, int t) 
{
    int i,
    endIndice= nums.size-1,
    sizeSub2 = nums.size-2;
    for (i=0; i<=sizeSub2; i++)
    {   int j;
        for (j=i+1;(fabs(j-i)<=k)&&(j<=endIndice);j++)
        {
          if (fabs (nums.arr[i] - nums.arr[j]) <= t)
          {
              return true;
          }
        }
    
    }
    return false;
}

