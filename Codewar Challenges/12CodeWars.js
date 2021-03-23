//challenge 1 -   Transportation on vacation - https://www.codewars.com/kata/568d0dd208ee69389d000016

//solution

function rentalCarCost(d) {
  // Your solution here

  if (d < 3) {
    return 40 * d
  } else if (d < 7) {
    return (40 * d) - 20
  } else {
    return (40 * d) - 50
  }

}

//end 
