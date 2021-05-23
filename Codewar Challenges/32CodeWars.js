//challenge 1 - Reversed Words - https://www.codewars.com/kata/51c8991dee245d7ddf00000e

//solution

function reverseWords(str){
  let strSplit = str.split(' ')
  let strJoint = strSplit.reverse().join(' ')
  return strJoint
}
//end
