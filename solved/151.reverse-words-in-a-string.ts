// Given an input string s, reverse the order of the words.
//
// A word is defined as a sequence of non-space characters.
// The words in s will be separated by at least one space.
//
// Return a string of the words in reverse order concatenated by a single space.
//
// Note that s may contain leading or trailing spaces or multiple spaces between two words.
// The returned string should only have a single space separating the words. Do not include any extra spaces.
//
//=========================================================================================================

function reverseWords(s: string): string {
  const string = s.trim()
  let curruntWord = ''
  const words: string[] = []

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      curruntWord += string[i]
    } else if (curruntWord.length > 0) {
      words.push(curruntWord)
      curruntWord = ''
    }
  }

  if (curruntWord.length > 0) {
    words.push(curruntWord)
  }

  return words.reverse().join(' ').trim()
}
