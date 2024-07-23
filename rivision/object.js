// function User(name){
//     //this{}

//     //addproperties to this
//     this.name = name;
//     this.isAdmin = false;
//     //return this;
// }
// let user = new User("jack");
// console.log(user);


// function BigUser(){
//     this.name= "John";
//     return {name: "Godzilla"};
// }
// console.log(new BigUser().name);


//  '?.'
// let user = {}; 
// // console.log(user.address.street);
// console.log(user?.address?.street);

let id = Symbol("id");
let user = {
  name: "John",
  age: 30,
  [id]: 123
};

for (let key in user) console.log(key); // name, age (no symbols)

// the direct access by the symbol works
console.log("Direct: " + user[id]);  // Direct: 123
