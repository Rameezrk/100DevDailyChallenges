//challenge 1 - Are You Playing Banjo? -  https://www.codewars.com/kata/53af2b8861023f1d88000832

//solution

function areYouPlayingBanjo(name) {
  if (name[0] === 'R' || name[0] === 'r') {
    return name + ' plays banjo'
  } else {
    return name + ' does not play banjo'
  }

}

//challenge 2 - Square(n) Sum - https://www.codewars.com/kata/515e271a311df0350d00000f

//solution

function squareSum(numbers){

  let result = 0

  for (let i = 0; i < numbers.length; i++) {
  result += Math.pow(numbers[i],2)
}
  return result
}

//challenge 3 - N-th Power - https://www.codewars.com/kata/57d814e4950d8489720008db

//solution

function index(array, n){
  if (n >= array.length) {
    return -1
  } else {
    return Math.pow(array[n],n)
  }
}

//challenge 4 - Function 2 - squaring an argument - https://www.codewars.com/kata/523b623152af8a30c6000027

//solution

// Write the "square"-function here
function square(num) {
  let result = num*num
  return result
}


//challenge 5 - Sum Arrays - https://www.codewars.com/kata/53dc54212259ed3d4f00071c

//solution

// Sum Numbers
function sum (numbers) {
 let result = 0
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i]

  }

return result
};

//end
