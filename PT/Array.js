// let mark = [25, 36, 85, 67, 56, 90, 78];

// console.log(mark);
// console.log(mark.length);

// let god = ['ram ji', 'krishna ji', 'radhe ji ', 'hanuman ji ', 'shiv ji ', 'ganesh ji']

//loop in array //

// for (let i = 0; i < god.length; i++) {
//     console.log(god[i]);
// }

// // for of 

// for (let el of god) {
//     console.log(el);
// }

// console.log(god);

// --Arrays indices-- //

// console.log(mark[0]=45);

// console.log(mark[2]);


// console.log(mark[5]);

// let cities = ['ratlam', 'ujjain', 'indore', 'dewash', 'mahidpur', 'bhopal', 'raypur']

// for (let city of cities) {
//     console.log(city.toUpperCase());
// }


// practice question //

// let mark = [85, 97, 44, 37, 76, 60];

// let sum = 0;

// for (let val of mark) {
//     sum += val;
// }

// let avg = sum / mark.length;
// console.log(`avg mark of the class = ${avg}`);


// let item = [250, 640, 300, 900, 50];

// idx = 0;
// for (let val of item) {
//     console.log(`value at index ${idx} = ${val}`);
//     let offer = val / 10;
//     item[idx]= item[idx] -offer;
//     console.log(`value after offer = ${item[idx]}`);
//     idx++;
// }

// for (let i = 0; i < item.length;  i++){
//     let offer = item[i] / 10;
//     item[i] -= offer;
// };

//console.log(item);

//let foodItem = ['mango', 'banana', 'apple', 'potato', 'lichi'];

// foodItem.push('GOBI', 'panir', 'oil', 'green tea');

// console.log(foodItem);

// foodItem.pop();

// console.log(foodItem);

// console.log(foodItem.toString());


//let marval_heroes = ['thor', 'spiderman', 'iornman', 'halk', 'badman', 'padman', 'vilan', 'dr.strange'];

// let dc_heroes = ['spinderman', 'badman'];

// let indian_heroes = ['hanuman', 'ram', 'mahadew', 'krishna']

// let heroes= marval_heroes.concat(dc_heroes , indian_heroes);

// let heroes = marval_heroes.unshift("badman");

// console.log(heroes);

//console.log(marval_heroes);

//console.log(marval_heroes.slice(1));

// let arr = [25, 85, 65, 54, 59];
// arr.splice(2, 2, 75, 99);
// console.log(arr);


let company = ['bloomberg', 'microsoft', 'Uber', 'Google', 'Ibm', 'netfilx'];

company.shift()
//console.log(company.slice(1))

//console.log(company)

//company.splice(2, 1 , 'ola')

company.push('amazon');

