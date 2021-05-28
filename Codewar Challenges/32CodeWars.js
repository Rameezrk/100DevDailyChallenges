//challenge 1 - Reversed Words - https://www.codewars.com/kata/51c8991dee245d7ddf00000e

//solution

function reverseWords(str){
  let strSplit = str.split(' ')
  let strJoint = strSplit.reverse().join(' ')
  return strJoint
}

//challenge 2 - Do I get a bonus? - https://www.codewars.com/kata/56f6ad906b88de513f000d96

//solution

function bonusTime(salary, bonus) {
// your code here
  if (bonus === true) {
    return `£${salary *= 10}`
  } else {
    return `£${salary}`
  }
}

//challenge 3 - Dollars and Cents - https://www.codewars.com/kata/55902c5eaa8069a5b4000083

//solution

function formatMoney(amount){
  // your formatting code here
 return '$' + amount.toFixed(2)
}

//challenge 4 - No Loops 2 - You only need one - https://www.codewars.com/kata/57cc40b2f8392dbf2a0003ce

//solution

function check(a,x){
  return a.includes(x)
};

//challenge 5 - How many lightsabers do you own? - https://www.codewars.com/kata/51f9d93b4095e0a7200001b8

//solution

function howManyLightsabersDoYouOwn(name) {
  if (name === 'Zach') {
    return 18
  } else {
    return 0
  }
}

//end
