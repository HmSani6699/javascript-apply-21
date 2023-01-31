/* 
practice problem 1
*/

function getMinutes(hour) {
    var setMinutes = hour * 60;
    return setMinutes;
}

var getHour = 1;
var setMinute = getMinutes(getHour);
// console.log(setMinute);


/* 
practice problem  2
*/

function isYearInLeapYear(year) {
    var newArray = []
    for (var i = 0; i < year.length; i++) {
        var index = i;
        var element = year[index];
        if ((element % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
            newArray.push(element)
        }
    }
    return newArray;
}

var year = [2023, 2024, 2025, 2028, 2030];
var newArray = isYearInLeapYear(year);
// console.log(newArray);


/*-------------------- 
practice problem  3
--------*/

function findOddSum(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        let arrayElement = array[i];
        if (arrayElement % 2 != 0) {
            sum += arrayElement;
        }

    }
    return sum
}

let array = [5, 7, 8, 10, 45, 30];
let sumOddNumber = findOddSum(array);
// console.log(sumOddNumber);


/*-------------------- 
practice problem  4
--------*/

function leapYear(year) {
    if (year % 2 === 0) {
        return true
    }
    return false
}

let year_1 = 2023;
let output = leapYear(year_1);
// console.log(output)


/*-------------------- 
practice problem  5
--------*/

function myAge(year) {
    if (year % 2 == 0) {
        return true
    }
    return false
}
let years = 19;
let myYear = myAge(years);
// console.log(myYear);