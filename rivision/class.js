// class User {

//     constructor(name) {
//       this.name = name;
//     }
  
//     sayHi() {
//       console.log(this.name);
//     }
  
//   }
  
//   // Usage:
//   let user = new User("John");
//   user.sayHi();



//Not just a syntactic sugar
// rewriting class User in pure functions

// 1. Create constructor function
// function User(name) {
//     this.name = name;
//   }
//   // a function prototype has "constructor" property by default,
//   // so we don't need to create it
  
//   // 2. Add the method to prototype
//   User.prototype.sayHi = function() {
//     console.log(this.name);
//   };
  
//   // Usage:
//   let user = new User("John");
 // user.sayHi();


//  class Animal {
//     constructor(name) {
//       this.speed = 0;
//       this.name = name;
//     }
//     run(speed) {
//       this.speed = speed;
//       console.log(`${this.name} runs with speed ${this.speed}.`);
//     }
//     stop() {
//       this.speed = 0;
//       console.log(`${this.name} stands still.`);
//     }
//   }
  
//   let animal = new Animal("My animal");
  
//   class Rabbit extends Animal {
//     hide() {
//       console.log(`${this.name} hides!`);
//     }
//   }
  
//   let rabbit = new Rabbit("White Rabbit");
  
//   rabbit.run(5); // White Rabbit runs with speed 5.
//   rabbit.hide(); // White Rabbit hides!


class Animal {

    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
  
    run(speed) {
      this.speed = speed;
      console.log(`${this.name} runs with speed ${this.speed}.`);
    }
  
    stop() {
      this.speed = 0;
      console.log(`${this.name} stands still.`);
    }
  
  }
  
  class Rabbit extends Animal {
    hide() {
      console.log(`${this.name} hides!`);
    }
  
    stop() {
      super.stop(); // call parent stop
      this.hide(); // and then hide
   // console.log("override")
    }
  }
  
  let rabbit = new Rabbit("White Rabbit");
  
  rabbit.run(5); // White Rabbit runs with speed 5.
  rabbit.stop(); // White Rabbit stands still. White Rabbit hides!


