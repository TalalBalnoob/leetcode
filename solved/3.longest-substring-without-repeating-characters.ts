function lengthOfLongestSubstring(s: string): number {
	let longest = 0

	for (let i = 0; i < s.length; i++) {
		let digits: string[] = [s[i]]
		for (let j = i + 1; j < s.length; j++) {
			if (digits.includes(s[j])) break
			digits.push(s[j])
		}
		longest = digits.length > longest ? digits.length : longest
	}

	return longest
}

console.log(lengthOfLongestSubstring(''))
