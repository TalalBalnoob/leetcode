function smallerNumbersThanCurrent(nums: number[]): number[] {
  let temp = nums.slice().sort((a, b) => a - b)
  let ret: number[] = []

  let map = new Map()

  for (let i = 0; i < temp.length; i++) {
    if (map.has(temp[i])) continue
    else map.set(temp[i], i)
  }

  for (let i = 0; i < nums.length; i++) {
    ret.push(map.get(nums[i]))
  }

  return ret
}
