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

function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0
  let valR = 1
  let valL = 1

  if (root.right) valR += maxDepth(root.right)
  if (root.left) valL += maxDepth(root.left)

  return Math.max(valL, valR)
}
