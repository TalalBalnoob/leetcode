function missingNumber(nums: number[]): number {
  let soreted = nums.sort((a, b) => a - b)

  for (let i = 0; i < soreted.length; i++) {
    if (i != soreted[i]) return i
  }

  return nums.length
}
