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

//challenge 3 - Thinkful - Logic Drills: Traffic light - https://www.codewars.com/kata/58649884a1659ed6cb000072

//solution

function updateLight(current) {

  //your code here!

  if (current === 'red') {
    return 'green'
  } else if (current === 'yellow') {
    return 'red'
  } else {
    return 'yellow'
  }

}

//challenge 4 - Highest and Lowest - https://www.codewars.com/kata/554b4ac871d6813a03000035

//solution

function highAndLow(numbers){
  // ...
 let output = numbers.split(' ')
 let convertInt = output.map((i) => Number(i))

 let min = Math.min.apply(null, convertInt)
 let max = Math.max.apply(null, convertInt)

 return  `${max} ${min}`


}

//challenge 5 - Heron's formula - https://www.codewars.com/kata/57aa218e72292d98d500240f

//solution

function heron(a,b,c) {
  let s = (a+b+c)/2
  return Math.sqrt(s*((s-a)*(s-b)*(s-c)))
}

//challenge 6 - // All Star Code Challenge #20 - https://www.codewars.com/kata/5865a75da5f19147370000c7

//solution

function addArrays(array1, array2) {
//code here

  let output = []

  if (array1.length != array2.length) {
    return error
  } else {
    return array1.map((num,idx) => num+array2[idx])
  }
}

//end
