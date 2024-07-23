/*

 JavaScript is a prototype-based language,
 which means that objects can inherit properties and methods directly from other objects.
 Instead of using classes (as in class-based languages), 
 JavaScript uses prototypes to create inheritance.
 Every object in JavaScript has an internal property called [[Prototype]] (or __proto__), which points to another object.
This object is called the prototype.

When you try to access a property or method on an object,
 JavaScript first looks for that property or method on the object itself. If it doesn’t find it,
 JavaScript then looks for the property or method on the object’s prototype.
This continues up the prototype chain until the property or method is found or the end of the chain is reached (i.e., when the prototype is null).

*/





// Creating a Prototype Object:
let personPrototype = {
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};



//Creating an Object that Inherits from the Prototype:
let person = Object.create(personPrototype);
person.name = 'Alice';


//Using the Inherited Method:
person.greet(); // Output: Hello, my name is Alice



// Prototype Chain Example:
console.log(person.__proto__ === personPrototype); // Output: true



//Using Prototypes with Constructor Functions
// Constructor Function:
function Person(name) {
    this.name = name;
}

// Creating Instances:
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

// Using the Inherited Method:
let bob = new Person('Bob');
let jane = new Person('Jane');

// Using the Inherited Method:
bob.greet(); // Output: Hello, my name is Bob
jane.greet(); // Output: Hello, my name is Jane


// Prototype Chain Example:
console.log(bob.__proto__ === Person.prototype); // Output: true
console.log(jane.__proto__ === Person.prototype); // Output: true

