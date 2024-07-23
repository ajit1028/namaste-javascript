// mix of values
//let arr = [ 'Apple', { name: 'John' }, true, function() { console.log('hello'); } ];
 //console.log(arr);
// console.log(arr[1].name);//John
// console.log(arr[3]());//hello
// arr.push("pear")
// arr.pop()
// arr.unshift("pear")
// arr.shift()

// for(let val of arr){
//     console.log(val)
// }



// for(let val in arr){
//     console.log(arr[val])
// }


// let arr = new Array("Apple", "Pear", "etc");

//splice
// let arr = ["I", "study", "JavaScript"];
// arr.splice(1, 1); // from index 1 remove 1 element
// console.log(arr);

// let arr = ["I", "study", "JavaScript", "right", "now"];
// // remove 2 first elements
// let removed = arr.splice(0, 2);
// console.log( removed ); // "I", "study" <-- array of removed elements
// console.log( arr ); 


// let arr = ["I", "study", "JavaScript"];
// // from index 2
// // delete 0
// // then insert "complex" and "language"
//   let removed = arr.splice(2, 0, "complex", "language");
//   console.log( removed );
// console.log( arr );


//slice
// let arr = ["t", "e", "s", "t"];
// console.log( arr.slice(1, 3) +"   arr=[" + arr+"]"); // e,s (copy from 1 to 3) and    arr=[t,e,s,t]

//concat
// let arr = [1, 2];
// // create an array from: arr and [3,4]
// console.log( arr.concat([3, 4]) ); // 1,2,3,4



// let arr = [1, 2];
// let arrayLike = {
//   0: "something",
//   length: 1
// };

// concat(arr.concat(arrayLike)); // 1,2,[object Object]


//indexOf/lastIndexOf and includes
// let arr = [1, 0, false];
// console.log( arr.indexOf(0) ); // 1
// console.log( arr.indexOf(false) ); // 2
// console.log( arr.indexOf(null) ); // -1
// console.log( arr.includes(1) ); // true


//find and findIndex/findLastIndex
// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"}
//   ];
  
//   let user = users.find(item => item.id == 1);
  
//   alert(user.name); // John


// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"},
//     {id: 4, name: "John"}
//   ];
  
//   // Find the index of the first John
//   console.log(users.findIndex(user => user.name == 'John')); // 0
  
//   // Find the index of the last John
//   console.log(users.findLastIndex(user => user.name == 'John'));//3


//sort 
// arr.sort( (a, b) => a - b );

//reverse
// let arr = [1, 2, 3, 4, 5];
// arr.reverse();
// console.log( arr ); // 5,4,3,2,1

//split and join
// let names = 'Bilbo, Gandalf, Nazgul';

// let arr = names.split(', ');

// for (let name of arr) {
//   console.log( ` ${name}` ); // A message to Bilbo  (and other names)
// }

// let str = "test";
// console.log( str.split('') ); // t,e,s,t

// let arr = ['Bilbo', 'Gandalf', 'Nazgul'];

// let str = arr.join(';'); // glue the array into a string using ;

// console.log( str ); // Bilbo;Gandalf;Nazgul
