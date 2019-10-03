// Jansen - Hacktiv8 Batch 37 - King Fox
// Exercise 4 - Looking for Modus

// Function to return the modus from an array
function cariModus(arr) {
    let counter = 0;
    let mostFrequent = 1;
    let modus = 0;
    let totalCount = 0;
    
    for (let i = 0; i < arr.length; i++) {
        counter = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                counter++;
            }
        }
        if (counter > mostFrequent) {
            mostFrequent = counter;
            modus = arr[i];
        }
        totalCount += counter;
    }
    if ((totalCount / arr.length) === mostFrequent) {
        modus = -1;
    }
    return modus;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1