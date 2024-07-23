// let user = {
//     name: "Ajit",
//     age:30,
//     "like human":true
// }
// user.isAdmin = true

// console.log(user);
// console.log(user.name + " " + user.age+ " " + user.isAdmin +"  "+ user["like human"]);


// let makeUser = (name, age)=>{
//      return{
//         name: name,
//         age:age,
    
//      }
// }
// console.log(makeUser("Ajit", 24)); 


// let user ={
//     name: "John",
//     age: 30
// };
// console.log("age" in user);
// console.log("blabal" in user)


// let user = {
//     name: "John",
//     surname: "Smith"
//   };
//   user.age = 25;


//   for(let key in user){
//     console.log(key)
//   }


// before the call
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
//   // after the call
//   menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
//   };

//   let multiplyNumeric = (obj) =>{
//     let val =2;
//     for(let key in obj){
//         if(typeof obj[key]=='number')
//           val *= obj[key]
        
//     }
//     return  val;
//   }
//   console.log(multiplyNumeric(menu));
  


// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }

// console.log(sum)


// let user = {
//     name:"Amit",
    
// }
// let newUser  = user 

// user.age = 30;
// console.log(newUser.age)


// let a ={}
// let b = a;
// console.log(a == b);
// console.log(a===b);

// let a ={}
// let b ={}
// console.log(a==b);


// let user ={
//     name:"John",
//     age:25
// }
// let clone ={}
// for(let key in user){
//     clone[key] = user[key]
// }

// clone.name = "Peter"
// console.log(user.name)
// // console.log(user == clone)

// let user = {name: "Amit"};
// let permission1 = {canView:true};
// let permission2 = {canEdit:true};
//   Object.assign(user, permission1, permission2)
// console.log(user)



// let user ={
//     name:"John",
//     age:25
// }
// let clone =Object.assign({},user)
// console.log(clone);
// clone.name = "doe"
// console.log(user===clone);
// console.log(clone.name);

