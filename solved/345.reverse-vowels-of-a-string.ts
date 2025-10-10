//Given a string s, reverse only all the vowels in the string and return it.
//
// The vowels are 'a', 'e', 'i', 'o', and 'u',
// and they can appear in both lower and upper cases, more than once.
//
//
// Example 1:
// Input: s = "IceCreAm"
// Output: "AceCreIm"
//
// Explanation:
// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".
//
// Example 2:
// Input: s = "leetcode"
// Output: "leotcede"
//
//=====================================================================

function reverseVowels(s: string): string {
  let string = s.split('')
  let start = 0
  let end = s.length - 1
  const isVowel = (char: string) =>
    ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(char)

  while (start < end) {
    if (!isVowel(string[start])) start++
    if (!isVowel(string[end])) end--

    if (isVowel(string[start]) && isVowel(string[end])) {
      const swap = string[start]
      string[start] = string[end]
      string[end] = swap

      start++
      end--
    }
  }
  return string.join('')
}

reverseVowels('IceCreAm')
