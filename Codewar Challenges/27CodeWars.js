//challenge 1 -   UEFA EURO 2016 - https://www.codewars.com/kata/57613fb1033d766171000d60

//solution

function uefaEuro2016(teams, scores){
  // your code...

  if (scores[0] > scores[1]) {
    return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
  } else if (scores[0] < scores[1]) {
    return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
  } else {
    return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
  }
}

//challenge 2 - MakeUpperCase - https://www.codewars.com/kata/57a0556c7cb1f31ab3000ad7

//solution

function makeUpperCase(str) {
  // Code here
  return str.toUpperCase()
}

//end
