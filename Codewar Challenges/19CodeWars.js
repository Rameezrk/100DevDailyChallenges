//challenge 1 -   L1: Bartender, drinks! - https://www.codewars.com/kata/568dc014440f03b13900001d

//solution

function getDrinkByProfession(param){
  let input = param.toLowerCase()

  if (input === 'jabroni') {
    return 'Patron Tequila'
  } else if (input === 'school counselor') {
    return 'Anything with Alcohol'
  } else if (input === 'programmer') {
    return 'Hipster Craft Beer'
  } else if (input === 'bike gang member') {
    return 'Moonshine'
  } else if (input === 'politician') {
    return 'Your tax dollars'
  } else if (input === 'rapper') {
    return 'Cristal'
  } else { return 'Beer'
  }
}

//end
