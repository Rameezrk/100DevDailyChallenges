//challenge 1 - Grasshopper - Terminal game move function - https://www.codewars.com/kata/563a631f7cbbc236cf0000c2

//solution

function move (position, roll) {
  // return the new position

  return position + (roll*2)
}

//challenge 2 - Get Planet Name By ID - https://www.codewars.com/kata/515e188a311df01cba000003

//solution

function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'
      break
    case 2:
      name = 'Venus'
      break
    case 3:
      name = 'Earth'
      break
    case 4:
      name = 'Mars'
      break
    case 5:
      name = 'Jupiter'
      break
    case 6:
      name = 'Saturn'
      break
    case 7:
      name = 'Uranus'
      break
    case 8:
      name = 'Neptune'
      break
  }

  return name;
}

//challenge 3 - Expressions Matter - https://www.codewars.com/kata/5ae62fcf252e66d44d00008e

//solution

function expressionMatter(a, b, c) {
  //do the calcs of the four variations

  let output1 = a * (b + c)
  let output2 = a*b*c
  let output3 = a + b * c
  let output4 = (a+b) * c
  let output5 = a+b+c

  let finalResult = [output1,output2,output3,output4,output5]

  //try filter function to get the highest value

  return Math.max(...finalResult)

}

//challenge 4 - Total amount of points - https://www.codewars.com/kata/5bb904724c47249b10000131

//solution

function points(games) {
  // loop the arrays

  let gamesSplit = []
  let result = 0

  for (let i = 0; i < games.length; i++) {

    if (games[i][0] > games[i][2]) {
      result += 3
    } else if (games[i][0] < games[i][2]) {
      result += 0
    } else {
      result += 1
    }


  }
  return result
  //split the property of the array from :
  //then do the if else values?
  //return the result
}

//challenge 5 - Find Maximum and Minimum Values of a List - https://www.codewars.com/kata/577a98a6ae28071780000989

//solution

var min = function(list){

    return Math.min(...list);
}

var max = function(list){

    return Math.max(...list);
}

//end//
