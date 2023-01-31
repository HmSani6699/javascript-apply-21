//sum array to all event number 
function sumNumber(num) {
    let sum = 0;
    for (var i = 0; i < num.length; i++) {
        let arrayElement = num[i];
        if (arrayElement % 2 === 0) {
            sum += arrayElement;
        }
    }
    return sum;
}
var num = [20, 11, 30, 40, 50];
var totalNumber = sumNumber(num);
// console.log(totalNumber)



//sum array to all odd number

function sumOddNumber(num) {
    let sum = 0;
    for (var i = 0; i < num.length; i++) {
        const index = i;
        const element = num[index];
        if (element % 2 != 0) {
            sum += element;
        }
    }
    return sum
}

const arry = [10, 33, 40, 20, 39, 48, 57];
const sumOutput = sumOddNumber(arry);
// console.log(sumOutput)


function sumArrayNumber(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        sum += i;
        console.log(i, element, sum)
    }
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
sumArrayNumber(array)

