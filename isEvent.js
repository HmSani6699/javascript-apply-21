function isEvent(number) {
    const result = number % 2;
    if (result === 0) {
        // console.log('is event number')
    }
    else {
        // console.log('is odd number')
    }

}

// const number = isEvent(21);


function isEvent(number) {
    const result = number % 2;
    if (result === 0) {
        return 'is event number'
    }
    else {
        return 'is odd number'
    }

}
const number = isEvent(20);
// console.log(number);