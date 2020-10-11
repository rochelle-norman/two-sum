# two-sum
Leetcode Two Sum solution

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

EXAMPLE

Input: nums = [2,7,11,15], target = 9

Output: [0,1]

Output: Because nums[0] + nums[1] == 9, we return [0, 1].

1.Check combinations by looping through each element in the array and find if there is another element that matches your target.
2. Nested loop to check for targets complement by looping through the rest of the array. 
3.This is a brute force solution, it can be improved so I do not use nested loops
