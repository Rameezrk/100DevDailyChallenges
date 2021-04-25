//challenge 1 - Grasshopper - Terminal game move function - https://www.codewars.com/kata/563a631f7cbbc236cf0000c2

//solution

function move (position, roll) {
  // return the new position

  return position + (roll*2)
}

//challenge 2 - Get Planet Name By ID - https://www.codewars.com/kata/515e188a311df01cba000003

//solution

function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'
      break
    case 2:
      name = 'Venus'
      break
    case 3:
      name = 'Earth'
      break
    case 4:
      name = 'Mars'
      break
    case 5:
      name = 'Jupiter'
      break
    case 6:
      name = 'Saturn'
      break
    case 7:
      name = 'Uranus'
      break
    case 8:
      name = 'Neptune'
      break
  }

  return name;
}

//end//////////
