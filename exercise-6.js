// Jansen - Hacktiv8 Batch 37 - King Fox
// Exercise 6 - Minimum Digit of Multiplication

// Function to return the minimum digit of multiplication from a number
function digitPerkalianMinimum(angka) {
    let num1 = 0;
    let num2 = 0;
    let arrNumberLength = [];
    let str = '';
    
    for (let i = 1; i <= angka; i++) {
        if (angka % i === 0) {
            num1 = i;
            num2 = angka / num1;
            str = num1.toString() + num2.toString();
            arrNumberLength.push(str.length);
        }   
    }
    arrNumberLength.sort();
    return arrNumberLength[0];
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2