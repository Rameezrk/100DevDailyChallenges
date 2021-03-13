//challenge 1 - Grasshopper - Messi Goals - https://www.codewars.com/kata/55ca77fa094a2af31f00002a

//solution

var laLigaGoals = 43
var championsLeagueGoals = 10
var copaDelReyGoals = 5

var totalGoals = totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals


//challenge 2 - Quarter of the year - https://www.codewars.com/kata/5ce9c1000bab0b001134f5af

//solution

const quarterOf = (month) => {


  if (month <= 3) {
    return 1
  } else if (month > 3 && month <= 6 ) {
    return 2
  } else if (month > 6 && month <= 9) {
    return 3
  } else {
    return 4
  }

}

//challenge 3 - L1: Set Alarm - https://www.codewars.com/kata/568dcc3c7f12767a62000038

//solution

function setAlarm(employed, vacation){
if (employed === true && vacation === false) {
  return true
} else {
  return false
}
}

//challenge 4 - Array plus array - https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

//solution

function arrayPlusArray(arr1, arr2) {
  let result = 0
  for (let i = 0; i < arr1.length; i++) {
    result += arr1[i] + arr2[i]
    //result += arr2[i]
  }


  return result
}

//challenge 5 - You Can't Code Under Pressure #1 - https://www.codewars.com/kata/53ee5429ba190077850011d4

//solution

function doubleInteger(i) {

  return i+i;
}

//end
