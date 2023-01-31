//sum array number 
function sumNumber(num) {
    let sum = 0;
    for (var i = 0; i < num.length; i++) {
        let arrayElement = num[i];
        sum += arrayElement;
    }
    return sum;
}
var num = [20, 10, 30, 40, 50];
var totalNumber = sumNumber(num);
console.log(totalNumber)

//looping in new array
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

var allNumber = [20, 10, 40, 23, 50, 88];
const result = number(allNumber);
// console.log(result)