//challenge 1 -   Sum of positive - https://www.codewars.com/kata/5715eaedb436cf5606000381
//solution

function positiveSum(arr) {
  let output = 0
  for (let i=0; i < arr.length; i++) {
    if (arr[i] > 0) {
      output += arr[i]
    }
  }
  return output
}

//end
