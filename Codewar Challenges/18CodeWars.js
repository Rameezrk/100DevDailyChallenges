//challenge 1 -   Lario and Muigi Pipe Problem - https://www.codewars.com/kata/56b29582461215098d00000f

//solution

function pipeFix(numbers){
  let output = []
  for (let i = numbers[0]; i < numbers[numbers.length-1] + 1; i++) {
    output.push(i)
  }
  return output
}

//end
