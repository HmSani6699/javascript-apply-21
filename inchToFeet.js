function inchToFeet(inch) {
    var feet = inch / 12;
    return feet
}
const mamaInch = 150;
const mamaFeet = inchToFeet(mamaInch);
// console.log(mamaFeet);


function inchToCentimeter(inch) {
    var centimeter = inch * 2.54;
    return centimeter;
}

var naniInch = 5;
var naniCentimeter = inchToCentimeter(naniInch);
console.log(naniCentimeter);