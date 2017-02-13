function SumThreeFive(num) {
  var array = [];
  var sum = 0;
  for (i = 0; i < num; i ++) {
    if ( i % 3 == 0 || i % 5 == 0 ) {
      array.push(i)
    }
  }
  for (var i in array) {
    sum += array[i]
  }
  return sum;
}
