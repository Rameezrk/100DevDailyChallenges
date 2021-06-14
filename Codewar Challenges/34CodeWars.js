//challenge 1 - pick a set of first elements - https://www.codewars.com/kata/572b77262bedd351e9000076

//solution

function first(arr, n) {
 if(n == undefined) return arr.slice(0, 1);
  if(n == 0) return [];
  let newArr = [];
  if(n <= arr.length){
    for(let i = 0; i < n; i++){
      newArr.push(arr[i])
    } return newArr
  } return arr
}

//challenge 2 - You only need one - Beginner - https://www.codewars.com/kata/57cc975ed542d3148f00015b

//solution

function check(a, x) {
  // your code here
  return a.includes(x)
}

//end//
