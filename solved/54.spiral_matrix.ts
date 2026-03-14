function spiralOrder(matrix: number[][]): number[] {
  const result = []

  while (matrix.length > 0) {
    result.push(...matrix.shift()!)
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i].length > 0) result.push(matrix[i].pop()!)
    }
    if (matrix.length > 0) {
      result.push(...matrix.pop()!.reverse())
    }
    for (let i = matrix.length - 1; i >= 0; i--) {
      if (matrix[i].length > 0) result.push(matrix[i].shift()!)
    }
  }

  return result
}

spiralOrder([[7], [9], [6]])
