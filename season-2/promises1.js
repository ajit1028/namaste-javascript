//Promises are used to handle async operations in JavaScript.
//const cart = ["shoes", "pants", "kurta"];
// Below two functions are asynchronous and dependent on each other
//const orderId = createOrder(cart);
//proceedToPayment(orderId);
// with Callback (Before Promise)
// Below here, it is the responsibility of createOrder function to first create the orderthen call the callback function
// createOrder(cart, function () {
//  proceedToPayment(orderId);
// });
// Above there is the issue of `Inversion of Control`


//const promiseRef = createOrder(cart);
// this promiseRef has access to `then`
// {data: undefined}
// Initially it will be undefined so below code won't trigger
// After some time, when execution has finished and promiseRef has the data then
//automatically the below line will get triggered.
// promiseRef.then(function () {
//  proceedToPayment(orderId);
// });



// const URL = "https://api.github.com/users/ajit1028";
// const user = fetch(URL);
 // User above will be a promise.
// console.log(user); // Promise {<Pending>}

/** OBSERVATIONS:
 * If we will deep dive and see, this `promise` object has 3 things
 * `prototype`, `promiseState` & `promiseResult`
 * & this `promiseResult` is the same data which we talked earlier as data
 * & initially `promiseResult` is `undefined`
 *
 * `promiseResult` will store data returned from API call
 * `promiseState` will tell in which state the promise is currently, initially it will be
in `pending` state and later it will become `fulfilled`
 */
/**
 * When above line is executed, `fetch` makes API call and return a `promise` instantly
which is in `Pending` state and Javascript doesn't wait to get it `fulfilled`
 * And in next line it console out the `pending promise`.
 * NOTE: chrome browser has some in-consistency, the moment console happens it shows in
pending state but if you will expand that it will show fulfilled because chrome updated the
log when promise get fulfilled.
 * Once fulfilled data is there in promiseResult and it is inside body in ReadableStream
format and there is a way to extract data.
 */


// const URL = "https://api.github.com/users/ajit1028";
// const user = fetch(URL);
// user.then(function (data) {
//  console.log(data);
// });

// And this is how Promise is used.
// It guarantees that it could be resolved only once, either it could be `success` or`failure`
/**
 A Promise is in one of these states:
 pending: initial state, neither fulfilled nor rejected.
 fulfilled: meaning that the operation was completed successfully.
 rejected: meaning that the operation failed.
 */
//  💡Promise Object are immutable.
//  -> Once promise is fulfilled and we have data we can pass here and there and we don't have to worry that
//  someone can mutate that data. So over above we can't directly mutate user promise object, we will have to
//  use .then


// A Promise is an object representing the eventual completion or failure of an asynchronous operation.
// const cart = ["shoes", "pants", "kurta"];

// createrOrder(cart,function(orderId){
//     proceedToPayment(orderId,function(paymentInfo){
//         showOrderSummary(paymentInfo,function(){
//             updateWalletBalance();
//         })
//     })
// })
// And now above code is expanding horizontally and this is called pyramid of doom.
// Callback hell is ugly and hard to maintain.

// 💡 Promise fixes this issue too using `Promise Chaining`
// Example Below is a Promise Chaining

// createOrder(cart)
//  .then(function(orderId){
//     return proceedToPayment(orderId);
//  })
//  .then(function(paymentInfo){
//     return showOrderSummary(paymentInfo);
//  })
//  .then(function(balance){
//     return updateWalletBalance(balance)
//  });
