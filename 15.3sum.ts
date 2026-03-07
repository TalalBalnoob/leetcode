function threeSum(nums: number[]): number[][] {
  let res: number[][] = []

  let numbers = nums.map((nums) => nums)

  for (let i = 0; i < nums.length; i++) {
    let number1 = nums[i]

    for (let j = i + 1; j < nums.length; j++) {
      // if (j === i) continue

      let number2 = nums[j]

      for (let k = j + 1; k < nums.length; k++) {
        // if (i === k || j === k) continue
        let number3 = nums[k]

        if (number1 + number2 + number3 === 0)
          res = [...res, [number1, number2, number3]]
      }
    }
  }

  let uniqueRes = res.map((item) => item.sort((a, b) => a - b))
  uniqueRes = uniqueRes.filter(
    (item, index) =>
      uniqueRes.findIndex(
        (i) => i[0] === item[0] && i[1] === item[1] && i[2] === item[2],
      ) === index,
  )



  return uniqueRes
}

threeSum([-1, 0, 1, 2, -1, -4])
