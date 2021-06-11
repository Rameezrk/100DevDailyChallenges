//challenge 10 - pick a set of first elements - https://www.codewars.com/kata/572b77262bedd351e9000076

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

//end
