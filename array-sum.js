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
// console.log(totalNumber)

