// function a()
// {
//     console.log("Hello Sir");
// };
// a();


// var b = function()
// {
//     console.log("hello")
// }
// b();

// var a= function b()
// {
//     console.log("hello")
// }
// a();
// b();//throw error

// a(); // "Hello A"
// b(); // TypeError
// function a() {
//  console.log("Hello A");
// }
// var b = function () {
//  console.log("Hello B");
// };

//We can pass functions inside a function as arguments and /or return a function(HOF). These ability are
//altogether known as First class function. It is programming concept available in some other languages too



// var b = function (param1, param2) {
     // labels/identifiers are parameters
//     console.log("b called");
//    };
//    b(arg1, arg2); // arguments - values passed inside function call
   
// var b = function(param1)
// {
//     console.log(param1);
// }

// b(function(){});


// Other way of doing the same thing:
// var b = function (param1) {
//     console.log(param1);
//    };
//    function xyz() {}
//    b(xyz); // same thing as prev code

var b = function (param1) {
    return function () {};
   };
   console.log(b()); //we log the entire fun within b

