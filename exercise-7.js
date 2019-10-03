// Jansen - Hacktiv8 Batch 37 - King Fox
// Exercise 7 - Sorting Alphabet

// Function to sort alphabet in a string
function urutkanAbjad(str) {
    arrStr = [];
    strLength = str.length;
    sort = '';
    
    for (let i = 0; i < strLength; i++) {
        arrStr.push(str[i]);
    }
    sort = arrStr.sort().join('');
    return sort;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'