// const users = [
//     {firstName:"Rakesh", lastName:"Tanwar", age:23},
//     {firstName:"Sagar", lastName:"Rawal", age:22},
//     {firstName:"Hanna", lastName:"Pateriya", age:23},
//     {firstName:"Vipin", lastName:"Yadav", age:24},
// ];
 //Get array of full name : ["Rakesh Tanwar", "Ashish Kumar", ...]
// const fullNameArr = users.map((user)=>user.firstName+" "+user.lastName);
// console.log(fullNameArr);

//Get the count/report of how many unique people with unique age are there
// like: {23 : 2, 22 : 1, 21 : 1}

// const report = users.reduce((acc,curr) => {
//     if(acc[curr.age])
//        acc[curr.age] = ++ acc[curr.age];
//     else{
//         acc[curr.age] = 1;
//     }
//     return acc;
// },{});
// console.log(report);

const users = [
    { firstName: "Alok", lastName: "Raj", age: 23 },
    { firstName: "Ashish", lastName: "Kumar", age: 29 },
    { firstName: "Ankit", lastName: "Roy", age: 29 },
    { firstName: "Pranav", lastName: "Mukherjee", age: 50 },
   ];

   // function chaining
   const output = users
    .filter((user) => user.age < 30)
    .map((user) => user.firstName);
   console.log(output); // ["Alok", "Ashish", "Ankit"]
   //Homework challenge: Implement the same logic using reduce
   // const output = users.reduce((acc, curr) => {
   //  if (curr.age < 30) {
   //  acc.push(curr.firstName);
   //  }
   //  return acc;
   // }, []);
   // console.log(output); // ["Alok", "Ashish", "Ankit"]