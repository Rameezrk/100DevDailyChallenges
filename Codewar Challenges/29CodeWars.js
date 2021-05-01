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

//end
