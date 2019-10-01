// Jansen - Hacktiv8 Batch 37 - King Fox
// Exercise 2 - Greatest Common Divisor

// Function to check the greatest common divisor among 2 numbers
function fpb(angka1, angka2) {
    let temp = 0;
    let arrDivisors = [];
    let gcd = 0;

    if (angka1 < angka2) {
        temp = angka1;
        angka1 = angka2;
        angka2 = temp;
    }

    for (let i = 1; i <= angka1; i++) {
        if (angka1 % i === 0 && angka2 % i === 0) {
            arrDivisors.push(i);
        }
    }
    gcd = arrDivisors.pop();
    return gcd;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1