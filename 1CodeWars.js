//challenge 1 - Multiply - https://www.codewars.com/kata/50654ddff44f800200000004

//solution

function multiply(a, b){
  return a * b
}


//challenge 2 - Can we divide it? - https://www.codewars.com/kata/5a2b703dc5e2845c0900005a

// solution

function isDivideBy(number, a, b) {
  if (number % a === 0 && number % b === 0) {
    return true
  } else {
    return false
    }
}

// challenge 3 - Grasshopper - If/else syntax debug - https://www.codewars.com/kata/57089707fe2d01529f00024a

//solution

function checkAlive (health) {
  if (health > 0) {
    return true
  } else {
    return false
  }
}

//challenge 4 - Hello, Name or World! - https://www.codewars.com/kata/57e3f79c9cb119374600046b

//solution

function hello(name) {
  if (name) {
  let name1 = name.toLowerCase()
    return "Hello, " + name1.charAt(0).toUpperCase() + name1.slice(1) + '!';
    } else return "Hello, World!"

}

//challenge 5 - Returning Strings - https://www.codewars.com/kata/55a70521798b14d4750000a4

//solution

function greet(name){
  return `Hello, ${name} how are you doing today?`
}
