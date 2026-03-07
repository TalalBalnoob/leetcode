// function twoSum(nums: number[], target: number): number[] {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       var res = nums[i] + nums[j]
//       if (res === target) return [i, j]
//     }
//   }
//   return []
// }

// improve
function twoSum(nums: number[], target: number): number[] {
  let map = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) return [i, map.get(target - nums[i])]
    else map.set(nums[i], i)
  }

  return []
}
