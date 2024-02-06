// console.log("Namaste");
// setTimeout(function(){
//     console.log("JavaScript")
// },5000);
// console.log("Season 2");

const cart = ["shoes","pants","kurta"];

api.createOrder(cart, function () {
    api.proceedToPayment(function () {
      api.showOrderSummary(function () {
         api.updateWallet();
          });
       });
  });
   //  Callback Hell
   //Till this point we are comfortable with concept of callback hell but now lets discuss about Inversion of control.
   //💡 Inversion of control is like that you lose the control of code when we are using callback.
   

   api.createOrder(cart, function () {
    api.proceedToPayment();
   });
   // 💡 So over here, we are creating a order and then we are blindly trusting `createOrder`
  // to call `proceedToPayment`.
   // 💡 It is risky, as `proceedToPayment` is important part of code and we are blindly
   trusting `createOrder` to call it and handle it.
   // 💡 When we pass a function as a callback, basically we are dependant on our parent
  // function that it is his responsibility to run that function. This is called `inversion of
  // control` because we are dependant on that function. What if parent function stopped
  // working, what if it was developed by another programmer or callback runs two times or never
 //  run at all