function isYearInLeapYear(year) {
    if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
        return 'is year in leap year'
    }
    return 'is year in not leap year'
}

// console.log(isYearInLeapYear(1900));



function isLeapYear(year) {
    if (year % 4 === 0) {
        console.log('Year is Leap Year: ', year)
    }
    else {
        console.log('Year is not Leap Year :', year)
    }
}
isLeapYear(2001)




