// let map = new Map();

// map.set('1', 'str1');   // a string key
// map.set(1, 'num1');     // a numeric key
// map.set(true, 'bool1'); // a boolean key

// // remember the regular Object? it would convert keys to string
// // Map keeps the type, so these two are different:
// console.log( map.get(1)   ); // 'num1'
// console.log( map.get('1') ); // 'str1'

// console.log( map.size ); // 3



// let recipeMap = new Map([
//     ['cucumber', 500],
//     ['tomatoes', 350],
//     ['onion',    50]
//   ]);
  
//   // iterate over keys (vegetables)
//   for (let vegetable of recipeMap.keys()) {
//     console.log(vegetable); // cucumber, tomatoes, onion
//   }
  
//   // iterate over values (amounts)
//   for (let amount of recipeMap.values()) {
//     console.log(amount); // 500, 350, 50
//   }
  
//   // iterate over [key, value] entries
//   for (let entry of recipeMap) { // the same as of recipeMap.entries()
//     console.log(entry); // cucumber,500 (and so on)
//   }
  

// let prices = Object.fromEntries([
//     ['banana', 1],
//     ['orange', 2],
//     ['meat', 4]
//   ]);
  
//   // now prices = { banana: 1, orange: 2, meat: 4 }
  
//   console.log(prices.orange); // 2


//set
// let set = new Set();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// // visits, some users come multiple times
// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);

// // set keeps only unique values
// console.log( set.size ); // 3

// for (let user of set) {
//     console.log(user.name); // John (then Pete and Mary)
// }



