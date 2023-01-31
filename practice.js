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