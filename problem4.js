function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}

function largestPalindrome(max) {
    var largest = 0;
    var result = 0;
    for (i = max; i >= 100; i--) {
        for (j = max; j >= 100; j--) {
            result = i * j;
            if (result > largest) {
                if (reverseString(result.toString()) == result.toString() ) {
                    largest = result;
                }
            }
        }
    }
    return largest
}