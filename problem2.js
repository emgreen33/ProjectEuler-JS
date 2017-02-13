function sumOfEven(numLimit) {
    var temp, sum = 0, previous_i = 0, i = 1;
    while (i < numLimit) {
        temp = previous_i;
        previous_i = i;
        i += temp;
        if ( i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}
