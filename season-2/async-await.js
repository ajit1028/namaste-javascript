// What is async?
// What is await?
// How async await works behind the scenes?
// Example of using async/await
// Error Handling
// Interviews
// Async await vs Promise.then/.catch

//part-1
// 💡 async function always returns a promise, even if I return a simple string from below function, async keyword will wrap it under Promise and then return.
// async function getData() {
//     return "Namaste JavaScript";
//   }
//   const dataPromise = getData();
//   console.log(dataPromise); // Promise {<fulfilled>: 'Namaste JavaScript'}
  
//   //❓How to extract data from above promise? One way is using promise .then
//   dataPromise.then(res => console.log(res)); // Namaste JavaScript


//part-2
// const p = new Promise((resolve, reject) => {
//     resolve('Promise resolved value!!');
//   })
  
//   async function getData() {
//     return p;
//   }
//   // In above case, since we are already returning a promise async function would simply return that instead of wrapping with a new Promise.
//   const dataPromise = getData();
//   //console.log(dataPromise); // Promise {<fulfilled>: 'Promise resolved value!!'}
//   dataPromise.then(res => console.log(res)); // Promise resolved value!!

//part-3
// const p = new Promise((resolve, reject) => {
//     resolve('Promise resolved value!!');
//   })
  
//   function getData() {
//     p.then(res => console.log(res));
//   }
  
//   getData(); // Promise resolved value!!


//part-4
// const p = new Promise((resolve, reject) => {
//     resolve('Promise resolved value!!');
//   })


  
//   //📌 Till now we have been using Promise.then/.catch to handle promise.
//   // Now let's see how async await can help us and how it is different
  
//   // The rule is we have to use keyword await in front of promise.
//   async function handlePromise() {
//     const val = await p;
//     console.log(val);
//   }
//   handlePromise(); // Promise resolved value!!


//part-5
// const p = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('Promise resolved value!!');
//      },10000)
  
//   });
  
//   function getData() {
//     p.then(res => console.log(res));
//     console.log("Namaste Javascript")
//   }
  
//   getData(); // Promise resolved value!!
//   //output
//   //Namaste Javascript
    //after 10 sec below line print
//   //Promise resolved value!!

// const p = new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve('Promise resolved value!!');
//          },10000);
//       });
// async function handlePromise() {
//     console.log("Hello World");
//         const val = await p;
//         console.log("Namaste Javascript");
//         console.log(val);
//       }
//       handlePromise(); // Promise resolved value!!

       //output
       // after 10 sec below lines will be print
//   //Namaste Javascript
//   //Promise resolved value!!


//part-6
// const p = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('Promise resolved value!!');
//      },10000);
//   });
// async function handlePromise() {
// console.log("Hello World");
//     const val1 = await p;
//     console.log("Namaste Javascript");
//     console.log(val1);

//     const val2 = await p;
//     console.log("Namaste Javascript");
//     console.log(val2);
  
//   }
//   handlePromise(); // Promise resolved value!!

  //output
    //after 10 sec both the promises will be printed
 /*
  Hello World
  Namaste Javascript
  Promise resolved value!!
  Namaste Javascript
  Promise resolved value!!
 */


  //part-7
//   const p1 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('Promise resolved value!!');
//      },10000);
//   });
//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('Promise resolved value!!');
//      },5000);
//   });
// async function handlePromise() {
// console.log("Hello World");
//     const val1 = await p1;
//     console.log("Namaste Javascript");
//     console.log(val1);

//     const val2 = await p2;
//     console.log("Namaste Javascript 2");
//     console.log(val2);
  
//   }
//   handlePromise();

  //output
    //after 10 sec both the promises will be printed
 /*
  Hello World
  Namaste Javascript
  Promise resolved value!!
  Namaste Javascript
  Promise resolved value!!
 */


  //part-8
//   const p1 = new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve('Promise resolved value!!');
//          },5000);
//       });
//       const p2 = new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve('Promise resolved value!!');
//          },10000);
//       });
//     async function handlePromise() {
//     console.log("Hello World");
//         const val1 = await p1;
//         console.log("Namaste Javascript");
//         console.log(val1);
    
//         const val2 = await p2;
//         console.log("Namaste Javascript2");
//         console.log(val2);
      
//       }
//       handlePromise();

  //output
    //after 10 sec both the promises will be printed
 /*
  Hello World
  after 5 sec 
  Namaste Javascript
  Promise resolved value!!

  after 5 sec
  Namaste Javascript2
  Promise resolved value!!
 */



  //part-9  (Real World example of async/await)
//   async function handlePromise() {
//     // fetch() => Response Object which as body as Readable stream => Response.json() is also a promise which when resolved => value
//     const data = await fetch('https://api.github.com/users/ajit1028');
//     const res = await data.json();
//     console.log(res);
//   };
//   handlePromise()

//part-10 (error handling)
async function handlePromise() {
    try {
      const data = await fetch('https://api.github.com/users/ajit1028');
      const res = await data.json();
      console.log(res);
    } catch (err) {
      console.log(err)
    }
  };
  handlePromise()
  
  // In above whenever any error will occur the execution will move to catch block. One could try above with bad url which will result in error.
  
  // Other way of handling error:
  //handlePromise().catch(err => console.log(err)); // this will work as handlePromise will return error promise in case of failure.
