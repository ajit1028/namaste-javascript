function Car(make,model,year,color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = function(){console.log(`You are the driving ${this.model}`)};
    //return this
}
const car1 = new Car("Ford","Mustang",2024,"red");
const car2  = new Car("Maruti","800",2004,"blue");
const car3  = new Car("TATA","Safari",2023,"black");

// console.log(car1.make);
// console.log(car2.make);
// console.log(car3.make);

// console.log(car1.model);
// console.log(car2.model);
// console.log(car3.model);

// car1.drive();
// car2.drive();
// car3.drive();


// console.log(car1);
// console.log(car2.constructor);//refrence to itself ==>[Function: Car]
// console.log(car3);
// console.log(car1 instanceof Car);


// function Car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }
//   const auto = new Car('Honda', 'Accord', 1998);
  
//   console.log(auto instanceof Car);
//   // Expected output: true
  
//   console.log(auto instanceof Object);