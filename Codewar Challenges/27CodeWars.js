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

//challenge 3 - Reversed sequence - https://www.codewars.com/kata/5a00e05cc374cb34d100000d

//solution

const reverseSeq = n => {
  let output = []

  for (let i = 1; i <= n; i++) {
    output.push(i)
  }

  return output.reverse()
};

//challenge 4 - Switch it Up! - https://www.codewars.com/kata/5808dcb8f0ed42ae34000031

//solution

function switchItUp(number){
//Write your own Code!
  switch(number) {
      case 0:
        return 'Zero'
        break
      case 1:
        return 'One'
        break
      case 2:
        return 'Two'
        break
      case 3:
        return 'Three'
        break
      case 4:
        return 'Four'
        break
      case 5:
        return 'Five'
        break
      case 6:
        return 'Six'
        break
      case 7:
        return 'Seven'
        break
      case 8:
        return 'Eight'
        break
      default:
        return 'Nine'
  }
}

//challenge 4 - Area or Perimeter - https://www.codewars.com/kata/5ab6538b379d20ad880000ab

//solution

const areaOrPerimeter = function(l , w) {
  // Return your answer

  if (l === w) {
    return l*w
  } else {
    return (l+w)*2
  }
};

//end//
