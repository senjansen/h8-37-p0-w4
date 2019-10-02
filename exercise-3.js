// Jansen - Hacktiv8 Batch 37 - King Fox
// Exercise 3 - Looking for Median

// Function to check the median from an array
function cariMedian(arr) {
    let arrLength = arr.length;
    let value1 = 0;
    let value2 = 0;
    let median = 0;
    
    if (arrLength % 2 === 0) {
        value1 = arr[(arrLength / 2) - 1];
        value2 = arr[arrLength / 2];
        median = (value1 + value2) / 2;
    } else {
        median = arr[(arrLength / 2) - 0.5];
    }
    return median;
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5