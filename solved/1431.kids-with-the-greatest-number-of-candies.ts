// There are n kids with candies.
// You are given an integer array candies,
// where each candies[i] represents the number of candies the ith kid has,
// and an integer extraCandies, denoting the number of extra candies that you have.
//
// Return a boolean array result of length n, where result[i] is true if,
// after giving the ith kid all the extraCandies,
// they will have the greatest number of candies among all the kids, or false otherwise.
//
// Note that multiple kids can have the greatest number of candies.
// ======================================================================================================

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let greatest = candies[0]
  const res: boolean[] = []

  for (let i = 1; i < candies.length; i++) {
    greatest = candies[i] > greatest ? candies[i] : greatest
  }

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= greatest) res.push(true)
    else res.push(false)
  }

  return res
}
