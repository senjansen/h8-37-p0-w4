// Jansen - Hacktiv8 Batch 37 - King Fox
// Exercise 5 - Change Alphabet

// Function to change alphabet with the next alphabet
function ubahHuruf(kata) {
    let newKata = '';
    let kataLength = kata.length;

    for (let i = 0; i < kataLength; i++) {
        let ascii = kata.charCodeAt(i);
        if (ascii !== 122) {
            ascii++;
        }
        newKata += String.fromCharCode(ascii);
    }
    return newKata;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu