// Given an integer array nums, find the with the largest sum, and return its sum.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// Example 2:
// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

// ========================================================

// function maxSubArray(nums: number[]): number {
//   let slicer = 1
//   while (true) {
//     if (nums.length == 1) break

//     console.log(
//       nums.slice(slicer),
//       nums.slice(slicer).reduce((p, c) => p + c),
//       nums.reduce((p, c) => p + c),
//     )
//     if (
//       nums.slice(slicer).reduce((p, c) => p + c) > nums.reduce((p, c) => p + c)
//     ) {
//       nums = nums.slice(slicer)
//     }

//     if (nums.length == 1) break
//     console.log(
//       nums.slice(0, -slicer),
//       nums.slice(0, -slicer).reduce((p, c) => p + c),
//       nums.reduce((p, c) => p + c),
//     )
//     if (
//       nums.slice(0, -slicer).reduce((p, c) => p + c) >
//       nums.reduce((p, c) => p + c)
//     ) {
//       nums = nums.slice(0, -slicer)
//     }

//     slicer++
//     if (slicer == nums.length) break
//   }

//   return nums.reduce((p, c) => p + c)
// }

function maxSubArray(nums: number[]): number {
  let maxSub = nums[0]
  let curSum = 0

  nums.map((num) => {
    if (curSum < 0) curSum = 0

    curSum += num
    maxSub = Math.max(maxSub, curSum)
  })

  return maxSub
}

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
