function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
	let fullArray = [...nums1, ...nums2]

	fullArray = fullArray.sort((a, b) => a - b)
	console.log(fullArray)

	if (fullArray.length % 2) {
		let midIndex = fullArray.length / 2 - 0.5
		return fullArray[midIndex]
	}

	let midIndex = fullArray.length / 2
	let median = (fullArray[midIndex - 1] + fullArray[midIndex]) / 2
	return median
}
