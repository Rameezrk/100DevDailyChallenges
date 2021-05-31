//challenge 1 - Will you make it? - https://www.codewars.com/kata/5861d28f124b35723e00005e

//solution

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
  let distance = mpg*fuelLeft
  if (distance >= distanceToPump) {
    return true
  } else {
    return false
  }
};

//end
