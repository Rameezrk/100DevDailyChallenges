//challenge 1 -   Will there be enough space? - https://www.codewars.com/kata/5875b200d520904a04000003

//solution

function enough(cap, on, wait) {
  // your code here

  let result = (on + wait) - cap

  if (result < 0) {
    return 0
  } else {
    return result
  }
}

//end
