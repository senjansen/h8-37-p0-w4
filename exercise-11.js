// Jansen - Hacktiv8 Batch 37 - King Fox
// Exercise 11 - Shopping Time!

// Function to return object with information
function shoppingTime(memberId, money) {
    let sale = {
        'Sepatu Stacattu' : 1500000,
        'Baju Zoro': 500000,
        'Baju H&N': 250000,
        'Sweater Uniklooh': 175000,
        'Casing Handphone': 50000,
    }
    
    let member = {
        memberId,
        money,
        listPurchased: [],
        changeMoney: 0
    }
    
    let cheapest = [];
    cheapest = Object.values(sale);
    for (let i = 1; i < cheapest.length; i++) {
        for (let j = 0; j < cheapest.length - i; j++) {
            if (cheapest[j] > cheapest[j + 1]) {
                temp = cheapest[j];
                cheapest[j] = cheapest[j + 1];
                cheapest[j + 1] = temp;
            }
        }
    }
    cheapest = cheapest[0];

    if (!memberId) {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }
    if (money < cheapest) {
        return 'Mohon maaf, uang tidak cukup';
    }

    member.changeMoney = member.money;
    for (let key in sale) {
        if (member.changeMoney >= sale[key]) {
            member.changeMoney -= sale[key];
            member.listPurchased.push(key)
        }

    }

    return(member);
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja