function factorial(number) {
    var multiplay = 1;
    for (var i = number; i >= 1; i--) {
        multiplay *= i
        // console.log(multiplay, i)
    }
    return multiplay
}
var number = 5;
// console.log(factorial(number));




function reversNumber(num) {
    for (var i = num; i >= 0; i--) {
        console.log(i)
    }
}
// reversNumber(10)


/* 
---factorial--
!0 = 1
!1 = 1
!2 = 2 * 1
!3 = 3 * 2 * 1
!4 = 4 * 3 * 2 * 1
!5 = 5 * 4 * 3 * 2 * 1
!6 = 6 * 5 * 4 * 3 * 2 * 1
!7 = 7 * 6 * 5 * 4 * 3 * 2 * 1
!8 = 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1
!9 = 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1
!10 = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1

*/

function factorial_1(num) {
    let factorial = 1;
    for (var i = num; i >= 1; i--) {
        factorial *= i;
        console.log(i, factorial)
    }
    return factorial
}

// var result = factorial_1(7);
// console.log(result)



function factorial(num) {
    var factorial = 1;
    for (var i = 1; i <= num; i++) {
        factorial *= i
        console.log(i, factorial)
    }
}

// factorial(7)





