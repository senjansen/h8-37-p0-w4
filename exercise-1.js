// Jansen - Hacktiv8 Batch 37 - King Fox
// Exercise 1 - Prime Numbers

// Function to check prime number or not
function angkaPrima(angka) {
    let totalDivided = 0;

    for (let i = 1; i <= angka; i++) {
        if (angka % i === 0) {
            totalDivided += 1;
        }
    }
    
    if (totalDivided === 2) {
        return true;
    } else {
        return false;
    }
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false