// Algorithm
// 1. Two Sums
// Given an array of integers nums and an integer target, return indices of the two numbers
// such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use
// the same element twice.
// You can return the answer in any order.
// Example 1:
// Input: nums = [2,7,11,15], target = 13
// Output: [0,2]
// Output: Because nums[0] + nums[2] == 13, we return [0, 2].
// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]
// Knowledge

const twoSums = (nums, target) => {
    let res = []
    for(i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if((nums[i] + nums[j]) === target){
                res.push(i, j)
            }
        }
    }
    return res
}

console.log(twoSums([3,3], 6))

