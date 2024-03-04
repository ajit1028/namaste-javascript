// function x()
// {
//     var a =7;
//     function y()
//     {
//         console.log(a);
//     }
//     return y;
// }
// var z = x();
// console.log(z);

// function x()
// {
//     var i=1;
//     setTimeout(function(){
//         console.log(i);
//         console.log("Namaste ");
//     },3000);
//     console.log("Hello");
// };
// x();

// function x() {
//     for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//     console.log(i);
//     }, i * 1000);
//     }
//     console.log("Namaste Javascript");
//    }
//    x();
   // Output:
   // Namaste Javascript
   // 6
   // 6
   // 6
   // 6
   // 6
   

   function x() {
    for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
    console.log(i);
    }, i * 1000);
    }
    console.log("Namaste Javascript");
   }
   x();


 
