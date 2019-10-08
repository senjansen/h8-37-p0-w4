// Jansen - Hacktiv8 Batch 37 - King Fox
// Exercise 10 - Change Me!

// Function to show object literal
function changeMe(arr) {
    let person = {};
    let today = new Date();
    let year = today.getFullYear();

    if (arr.length === 0) {
        console.log('');
    } else {
        for (let i = 0; i < arr.length; i++) {
            console.log((i + 1) + '. ' + arr[i][0], arr[i][1] + ':');
            person.firstName = arr[i][0];
            person.lastName = arr[i][1];
            person.gender = arr[i][2];
            person.age = year - arr[i][3];
            if (arr[i][3] === undefined || arr[i][3] > year) {
                person.age = 'Invalid Birth Year';
            }
            console.log(person);
        }
    }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""