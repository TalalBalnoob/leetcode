// You are given two strings word1 and word2.
// Merge the strings by adding letters in alternating order,starting with word1.
// If a string is longer than the other,
// append the additional letters onto the end of the merged string.
//
// Return the merged string.

// ===================================================================================================

function mergeAlternately(word1: string, word2: string): string {
  const w1Lenght = word1.length
  const w2Lenght = word2.length

  const length = w1Lenght >= w2Lenght ? w1Lenght : w2Lenght
  let res = ''

  for (let i = 0; i <= length; i++) {
    if (word1.length === i) {
      res += word2.slice(i, word2.length)
      break
    }
    if (word2.length === i) {
      res += word1.slice(i, word1.length)
      break
    }

    res += word1[i]
    res += word2[i]
  }

  return res
}
