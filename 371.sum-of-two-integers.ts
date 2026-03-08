function getSum(a: number, b: number): number {
  let bit1 = a.toString(2)
  let bit2 = b.toString(2)

  return a | b
}

console.log(getSum(1, 2))
