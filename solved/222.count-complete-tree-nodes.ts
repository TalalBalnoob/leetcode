// ------------------------------ The Problem Definition ------------------------------------------
// Given the root of a complete binary tree, return the number of the nodes in the tree.

// According to Wikipedia, every level, except possibly the last,
// is completely filled in a complete binary tree, and all nodes
// in the last level are as far left as possible.

// It can have between 1 and 2h nodes inclusive at the last level h.
// Design an algorithm that runs in less than O(n) time complexity.

// -------------------------- The provided code definitions ---------------------------------------
// Definition for a binary tree node. from leetcode.com
class TreeNode {
	val: number
	left: TreeNode | null
	right: TreeNode | null
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val
		this.left = left === undefined ? null : left
		this.right = right === undefined ? null : right
	}
}

// ----------------------------------- My Solution -----------------------------------------------
function countNodes(root: TreeNode | null): number {
	if (!root) return 0

	const numberOfNodes = countNodes(root.left) + countNodes(root.right)

	return numberOfNodes + 1
}
