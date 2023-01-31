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
console.log(result)

