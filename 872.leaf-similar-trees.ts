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
let leafs: number[] = []

function getLeafs(root: TreeNode | null) {
  if (!root) return

  if (root.left === null && root.right === null) {
    leafs.push(root.val)
    return
  }

  getLeafs(root.left)
  getLeafs(root.right)
  return
}

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  getLeafs(root1)
  const leafs1: number[] = leafs

  leafs = []
  getLeafs(root2)
  const leafs2: number[] = leafs

  if (leafs2 === leafs1) return true
  else return false
}
