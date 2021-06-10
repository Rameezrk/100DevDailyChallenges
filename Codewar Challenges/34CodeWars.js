//challenge 10 - Opposites Attract - https://www.codewars.com/kata/555086d53eac039a2a000083

//solution

function lovefunc(flower1, flower2){
  // moment of truth

  if (flower1 % 2 === 0 && flower2 % 2 === 0) {
    return false
  } else if (flower1 % 2 === 1 && flower2 % 2 === 1){
    return false
  } else {
    return true
  }

}


//end
