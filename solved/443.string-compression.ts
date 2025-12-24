function compress(chars: string[]): number {
  let currDeg = ''
  let arr: string[] = []
  let currRep = 1

  chars.forEach((char) => {
    if (char === currDeg) {
      currRep += 1
      return
    } else if (char !== currDeg && currDeg != '') {
      if (currRep > 1) {
        if (currRep > 9) {
          const repStr = currRep.toString().split('')
          repStr.forEach((digit) => {
            arr.push(digit)
          })
        } else arr.push(currRep.toString())
      }
      currRep = 1
      currDeg = char
      arr.push(currDeg)
      return
    } else if (char !== currDeg) {
      arr.push(char)
      currDeg = char
    }
  })

  if (currRep > 1) {
    if (currRep > 9) {
      const repStr = currRep.toString().split('')
      repStr.forEach((digit) => {
        arr.push(digit)
      })
    } else arr.push(currRep.toString())
  }

  for (let i = 0; i < arr.length; i++) {
    chars[i] = arr[i]
  }

  return arr.length
}
