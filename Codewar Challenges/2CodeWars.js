//challenge 1 - String repeat - https://www.codewars.com/kata/57a0e5c372292dd76d000d7e

//solution

function repeatStr (n, s) {
  return s.repeat(n)
}

//challenge 2 - Function 1 - hello world - https://www.codewars.com/kata/523b4ff7adca849afe000035

//solution

function greet() {
  return 'hello world!'
}

//challenge 3 - Beginner Series #1 School Paperwork - https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd

//solution

function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0
  } else {
    return n*m
  }
}


//challenge 4 - Is he gonna survive? - https://www.codewars.com/kata/59ca8246d751df55cc00014c

//solution

function hero(bullets, dragons){
if ((bullets / dragons) % 2 === 0 && bullets > 0) {
  return true
} else if (bullets > (dragons*2)) {
   return true
} else {
  return false
}
}

//challenge 5 - Keep Hydrated! - https://www.codewars.com/kata/582cb0224e56e068d800003c

//solution

function litres(time) {
  return parseInt(0.5* time);
}

//end//
