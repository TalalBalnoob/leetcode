function threeSum(nums: number[]): number[][] {
  let results: number[][] = []

  for (let i = 2; i < nums.length; i += 2) {
    let res = twoSum([...nums.slice(i - 1, i + 1)], -nums[i - 2])
    if (res.length > 0)
      results.push([...res.map((num) => nums[num]), nums[i - 2]])
  }

  return results
}

function twoSum(nums: number[], target: number): number[] {
  let map = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) return [i, map.get(target - nums[i])]
    else map.set(nums[i], i)
  }

  return []
}

threeSum([-1, 0, 1, 2, -1, -4])
