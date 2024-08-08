function reverseNumber(number) {
    let numberStr = number;
    let reversedStr = numberStr.split('').reverse().join('');
    let reversedNumber = parseInt(reversedStr, 10);
    console.log(reversedNumber);
}