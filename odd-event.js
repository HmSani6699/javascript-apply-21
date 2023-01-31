//looping in new array to event number
function number(allNumber) {
    var newArry = []
    for (var i = 0; i < allNumber.length; i++) {
        var index = i;
        var element = allNumber[index];
        if (element % 2 === 0) {
            newArry.push(element);
        }
        // console.log(i, element)
    }
    return newArry
}

//looping in new array to odd number
function number_1(allNumber) {
    var newArry = []
    for (var i = 0; i < allNumber.length; i++) {
        var index = i;
        var element = allNumber[index];
        if (element % 2 != 0) {
            newArry.push(element);
        }
    }
    return newArry
}

var allNumber = [20, 10, 40, 23, 50, 88, 35, 77];
const result = number_1(allNumber);
// console.log(result)



/* 
----check the odd and event number using to function
*/

//odd number
function getOddNumber(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 2 != 0) {
            console.log(i)
        }
    }
}
// getOddNumber(10);



//
for (let i = 0; i <= 10; i += 2) {
    console.log(i)
}

var i = 1;
while (i < 10) {
    console.log(i);
    i += 2
}

