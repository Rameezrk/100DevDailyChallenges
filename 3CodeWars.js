//challenge 1 - Fake Binary - https://www.codewars.com/kata/57eae65a4321032ce000002d

//solution

function fakeBin(x){
let result = ''
  for (let i = 0; i < x.length; i++) {
    if (x[i] < 5) {
      result += '0'
    } else {
    result += '1'
  }
  }
return result
}


//challenge 2 - Check the exam - https://www.codewars.com/kata/5a3dd29055519e23ec000074

//solution

function checkExam(array1, array2) {
 let result = 0
  // need a loop
  for (let i = 0; i < array1.length; i++) {

      if (array1[i] === array2[i]) {
        result += 4
      } else if (array2[i] == '') {
        result += 0
      } else {
        result += -1
      }

  }

if (result < 0) {
  return result = 0
} else {
  return result
}

}

//challenge 3 - Grasshopper - Summation - https://www.codewars.com/kata/55d24f55d7dd296eb9000030

//solution

var summation = function (num) {
  let result = 0
  for (let i = 1; i <= num; i++) {
     result += i
  }
  return result
}


//challenge 4 - Grasshopper - Function syntax debugging - https://www.codewars.com/kata/56dae9dc54c0acd29d00109a

//solution

function main(verb, noun) {
  return `${verb}${noun}`
}

//challenge 5 - Grasshopper - Debug sayHello - https://www.codewars.com/kata/5625618b1fe21ab49f00001f

//solution

function sayHello(name) {
  return `Hello, ${name}`
}

//end //
