function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      var res = nums[i] + nums[j]
      if (res === target) return [i, j]
    }
  }
  return []
}
