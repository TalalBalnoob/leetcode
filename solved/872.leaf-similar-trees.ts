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

function dfs(root: TreeNode | null, leafs: number[]) {
  if (root === null) return
  if (root.right === null && root.left === null) {
    leafs.push(root.val)
    return
  }
  dfs(root.left, leafs)
  dfs(root.right, leafs)
}

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  if (root1 === null || root2 === null) return false
  const leafOf1: number[] = []
  const leafOf2: number[] = []

  dfs(root1, leafOf1)
  dfs(root2, leafOf2)

  if (leafOf1.length !== leafOf2.length) return false

  for (let i = 0; i < leafOf1.length; i++) {
    if (leafOf1[i] !== leafOf2[i]) return false
  }

  return true
};
