// ------------------------------ The Problem Definition ------------------------------------------
// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
// There is only one repeated number in nums, return this repeated number.
// You must solve the problem without modifying the array nums and uses only constant extra space.

// ------------------------------------ My Solution -----------------------------------------------

function findDuplicate(nums: number[]) {
  const hashTable: { [key: number]: number } = {};
  hashTable[nums[0]] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (hashTable[nums[i]]) return nums[i];
    else hashTable[nums[i]] = nums[i];
  }
  return 0;
}
