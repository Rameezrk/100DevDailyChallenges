//challenge 1 - The most asked question on CodeWars - https://www.codewars.com/kata/5935ecef7705f9614500002d
//solution

function detect(comment) {
  let output = comment
  let rest = output.split(' ')

  if (rest[0] === 'Can' && rest[1] === 'someone' && rest[2] === 'explain') {
    return true
  } else {
    return false
  }

}

//challenge 2 - The Feast of Many Beasts - https://www.codewars.com/kata/5aa736a455f906981800360d

//solution

function feast(beast, dish) {
//your function here

  if (beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length-1]) {
    return true
  } else {
    return false
  }
}


//challenge 3 - Convert a Number to a String! - https://www.codewars.com/kata/5265326f5fda8eb1160004c8

//solution

function numberToString(num) {
  // Return a string of the number here!
 return num.toString()
}

//challenge 4 - Remove exclamation marks - https://www.codewars.com/kata/57a0885cbb9944e24c00008e

//solution 

function removeExclamationMarks(s) {
  let replace = s.replace(/!/g,'')
  return replace
}

//end//
