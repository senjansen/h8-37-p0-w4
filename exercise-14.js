// Jansen - Hacktiv8 Batch 37 - King Fox
// Exercise 14 - Using Bus

// Function to calculate the fare of a bus
function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];

    let result = [];
    
    if (!arrPenumpang.length) {
        return result;
    }
    for (let i = 0; i < arrPenumpang.length; i++) {
        let dataPenumpang = {};
        let fare = 0;
        dataPenumpang.penumpang = arrPenumpang[i][0];
        dataPenumpang.naikDari =  arrPenumpang[i][1];
        dataPenumpang.tujuan =  arrPenumpang[i][2];
        fare = dataPenumpang['tujuan'].charCodeAt(0) - dataPenumpang['naikDari'].charCodeAt(0);
        dataPenumpang.bayar = fare * 2000;
        result.push(dataPenumpang);
    }
    return result;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]