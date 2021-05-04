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

//end//
