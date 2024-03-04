// function outer() {
//     var a = 10;
//     function inner() {
//     console.log(a);
//     } // inner forms a closure with outer
//     return inner;
//    }
   //outer()(); // 10 // over here first `()` will return inner function and then using secong`()` to call inner function
   
//    var z=outer(); 
//    console.log(z);

// function outer(str)
// {
//    let a = 10;
//    function inner()
//    {
//       console.log(a,str);
//    }
//     return inner;
// }
// outer("hello there")();


// function outest() {
//     var c = 20;
//     function outer(str) {
//     let a = 10;
//     function inner() {
//     console.log(a, c, str);
//     }
//     return inner;
//     }
//     return outer;
//    }
//    outest()("Hello There")(); // 10 20 "Hello There"



// increment();
// function z() {
//     var b = 900;
//     function x() {
//     var a = 7;
//     function y() {
//     console.log(a, b);
//     }
//     y();
//     }
//     x();
//    }
//    z(); // 7 900


// without closures, anyone can access count and change it
// var count = 0;
// function increment(){
//     count++;
// }

// (with closures) -> put everything into a function
// function counter() {
//     var count = 0;
//     function increment(){
//     count++;
//     }
//    }
// console.log(count); 
// this will give referenceError as count can't be accessed. So now weare able to achieve hiding of data


//(increment with function using closure) true function
// function counter() {
//     var count = 0;
//     return function increment(){
//     count++;
//     console.log(count);
//     }
//    }
//    var counter1 = counter(); //counter function has closure with count var.
//    counter1(); // increments counter

//    var counter2 = counter();
// counter2(); // here counter2 is whole new copy of counter function and it wont impack theoutput of counter1

   // Above code is not good and scalable for say, when you plan to implement decrementcounter at a later stage.
// To address this issue, we use *constructors*
// Adding decrement counter and refactoring code:
 function Counter() {
 //constructor function. Good coding would be to capitalize first letter of constructorfunction.
 var count = 0;
 this.incrementCounter = function() { //anonymous function
 count++;
 console.log(count);
 }
 this.decrementCounter = function() {
 count--;
 console.log(count);
 }
}

var counter1 = new Counter(); // new keyword for constructor fun
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();
