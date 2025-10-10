function findMaxAverage(nums: number[], k: number): number {
  let res: number[] = []

  for (let i = 0; i <= nums.length - k; i++) {
    const part = nums.slice(i, i + k)
    const result = part.reduce((p, c) => p + c, 0) / k

    res.push(result)
  }

  res.sort((a, b) => b - a)

  return res[0]
}

console.log(findMaxAverage([5], 1))
