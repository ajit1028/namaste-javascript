// //part-1
//  const  cart = ["shoes","pants","kurta"];

//  // Consumer part of promise
//  const promise = createOrder(cart);//orderId
 

//  // Our expectation is above function is going to return me a promise.
// promise.then(function(orderId){
//     console.log(orderId);
//   //  proceedToPayment(orderId);
// });

// //  Above snippet we have observed in our previous lecture itself.
// //  Now we will see, how createOrder is implemented so that it is returning a promise
// //  In short we will see, "How we can create Promise" and then return it.

// // Producer part of promise

//  function createOrder(cart){
// //    JS provides a Promise constructor through which we can create promise
// //    It accepts a callback function with two parameter `resolve` & `reject`
//      const promise = new Promise(function(resolve,reject){
// //           What is this `resolve` and `reject`?
// //      These are function which are passed by javascript to us in order to handle success and failure of function call.
// //      Now we will write logic to `createOrder`
//       /* Mock logic steps
//        * 1. validateCart
//        * 2. Insert in DB and get an orderId
//      */
// //        We are assuming in real world scenario, validateCart would be defined
     
//        if (!validateCart(cart)) {
// //          If cart not valid, reject the promise
//         const err = new Error("Cart is not Valid");
//         reject(err);
//       }
//       const orderId = "12345"; // We got this id by calling to db (Assumption)
//       if (orderId) {
//         // Success scenario
//         resolve(orderId);
//       }
//      });
//   return promise;
// }

// function validateCart(cart){
//     return true;
// }



//part-2
// const cart = ["shoes", "pants", "kurta"];

// const promise = createOrder(cart); // orderId
// // ❓ What will be printed in below line?
// // It prints Promise {<pending>}, but why?
// // Because above createOrder is going to take sometime to get resolved, so pending state. But once the promise is resolved, `.then` would be executed for callback.
// //console.log(promise);

// promise.then(function (orderId) {
//     console.log(orderId);
//  // proceedToPayment(orderId);
// });

// function createOrder(cart) {
//   const promise = new Promise(function (resolve, reject) {
//     if (!validateCart(cart)) {
//       const err = new Error("Cart is not Valid");
//       reject(err);
//     }
//     const orderId = "12345";
//     if (orderId) {
//         setTimeout(function(){
//             resolve(orderId);
//         },5000)
      
//     }
//   });
//   return promise;
// }

// function validateCart(cart){
//         return true;
//     }


//part-3
// const cart = ["shoes", "pants", "kurta"];

// const promise = createOrder(cart); // orderId

//  //Here we are consuming Promise and will try to catch promise error
// promise
// .then(function (orderId) {
//     console.log(orderId);
//  // proceedToPayment(orderId);
// })
// .catch(function(err){
//     // ⚠️ failure aka reject handling
//     console.log(err.message);
// });


//  //Here we are creating Promise
// function createOrder(cart) {
//   const promise = new Promise(function (resolve, reject) {
//    //  Assume below `validateCart` return false then the promise will be rejected
//    //  And then our browser is going to throw the error.
//     if (!validateCart(cart)) {
//       const err = new Error("Cart is not Valid");
//       reject(err);
//     }
//     const orderId = "12345";
//     if (orderId) {
//         setTimeout(function(){
//             resolve(orderId);
//         },5000)
      
//     }
//   });
//   return promise;
// }

// function validateCart(cart){
//         return false;
//     }

//part-4 (the concept of Promise Chaining)
// const cart = ["shoes", "pants", "kurta"];

// createOrder(cart)
//   .then(function (orderId) {
//     // ✅ success aka resolved promise handling
//     // 💡 we have return data or promise so that we can keep chaining the promises, here we are returning data
//     console.log(orderId);
//     return orderId;
//   })
//   .then(function (orderId) {
//     // Promise chaining
//     // 💡 we will make sure that `proceedToPayment` returns a promise too
//     return proceedToPayment(orderId);
//   })
//   .then(function (paymentInfo) {
//     // from above, `proceedToPayment` is returning a promise so we can consume using `.then`
//     console.log(paymentInfo);
//   })
//   .catch(function (err) {
//     // ⚠️ failure aka reject handling
//     console.log(err.message);
//   });

// // Here we are creating Promise
// function createOrder(cart) {
//   const promise = new Promise(function (resolve, reject) {
//     // Assume below `validateCart` return false then the promise will be rejected
//     // And then our browser is going to throw the error.
//     if (!validateCart(cart)) {
//       const err = new Error("Cart is not Valid");
//       reject(err);
//     }
//     const orderId = "12345";
//     if (orderId) {
//       resolve(orderId);
//     }
//   });
//   return promise;
// }

// function validateCart(cart){
//             return true;
//         }
// function proceedToPayment(orderId) {
//   return new Promise(function (resolve, reject) {
//     // For time being, we are simply `resolving` promise
//     resolve("Payment Successful");
//   });
// }

//part-5 (extension of .catch)

// const cart = ["shoes", "pants", "kurta"];
// createOrder(cart)
//   .then(function (orderId) {
//     // ✅ success aka resolved promise handling
//     // 💡 we have return data or promise so that we can keep chaining the promises, here we are returning data
//     console.log(orderId);
//     return orderId;
//   })
//     .catch(function (err) {
//     // ⚠️ Whatever fails below it, catch wont care
//     // this block is responsible for code block above it.
//     console.log(err.message);
//   })
//   .then(function (orderId) {
//     // Promise chaining
//     // 💡 we will make sure that `proceedToPayment` returns a promise too
//     return proceedToPayment(orderId);
//   })
//   .then(function (paymentInfo) {
//     // from above, `proceedToPayment` is returning a promise so we can consume using `.then`
//     console.log(paymentInfo);
//   });

//   function createOrder(cart) {
//       const promise = new Promise(function (resolve, reject) {
//         // Assume below `validateCart` return false then the promise will be rejected
//         // And then our browser is going to throw the error.
//         if (!validateCart(cart)) {
//           const err = new Error("Cart is not Valid");
//           reject(err);
//         }
//         const orderId = "12345";
//         if (orderId) {
//           resolve(orderId);
//         }
//       });
//       return promise;
//     }
    


//   function validateCart(cart){
//                 return true;
//             }
//     function proceedToPayment(orderId) {
//       return new Promise(function (resolve, reject) {
//         // For time being, we are simply `resolving` promise
//         resolve("Payment Successful");
//       });
//     }