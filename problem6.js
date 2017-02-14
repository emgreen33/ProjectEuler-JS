function sumNatural(num){
  var sum = 0;
  for (i = 0; i <= num; i++) {
    sum += i * i
  }
  return sum;
}

function squareSumNatural(num) {
  var squareSum = 0;
  var sum = 0;
  for (i = 0; i<= num; i++) {
    sum += i
  }
  squareSum = sum * sum
  return squareSum;
}

function differenceOfSums(num){
  var difference = squareSumNatural(num) - sumNatural(num)
  return difference;
}