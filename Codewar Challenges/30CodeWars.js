//challenge 1 - Convert number to reversed array of digits - https://www.codewars.com/kata/5583090cbe83f4fd8c000051

//solution

function digitize(n) {
  let nString = n.toString()
  let nArray = nString.split('')
 let output = []
  for (let i = 0; i < nString.length; i++) {
    output.push(+nArray[i])
  }
  return output.reverse()
}

//end//
