// we have an array with a name and surname
// let arr = ["John", "Smith"]

// // destructuring assignment
// // sets firstName = arr[0]
// // and surname = arr[1]
// let [firstName, surname] = arr;

// console.log(firstName); // John
// console.log(surname);  // Smith

//object destructuring
// let options = {
//     title: "Menu",
//     width: 100,
//     height: 200
//   };
  
//   let {title, width, height} = options;
  
//   console.log(title);  // Menu
//   console.log(width);  // 100
//   console.log(height); // 200

// let options = {
//     title: "Menu",
//     height: 200,
//     width: 100
//   };
  
//   // title = property named title
//   // rest = object with the rest of properties
//   let {title, ...rest} = options;
  
//   // now title="Menu", rest={height: 200, width: 100}
//   console.log(rest.height);  // 200
//   console.log(rest.width);   // 100
  

let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  spouse: null
};

let json = JSON.stringify(student);

console.log(typeof json); // we've got a string!

console.log(json);
