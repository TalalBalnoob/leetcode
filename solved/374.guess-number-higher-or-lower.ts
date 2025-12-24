/**
 * Forward declaration of guess API.
 * @param  num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 */

declare function guess(num: number): number

function guessNumber(n: number): number {
  let left = 1
  let right = n
  while (left <= right) {
    const mid = Math.floor((right + left) / 2)
    const guessed = guess(mid)

    if (guessed == -1) right = mid
    if (guessed == 1) left = mid
    if (guessed == 0) return mid
  }
  return -1
}
