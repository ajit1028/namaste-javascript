function SetUsename(username){
    this.username = username;
   // console.log("called");
}

function createUser(username,email,password) {
    SetUsename.call(this,username);

    this.email = email;
    this.password = password;

}

const chai = new createUser("chai","chai@fb.com","123");
//console.log(chai);


//===============================================================
const person = {
       firstName :"Bholu",
       lastName: "Rai",
    fullName: function(city, country) {
        
        console.log(`${this.firstName} ${this.lastName}, ${city}, ${country}`);
    }
};

//person.fullName("Banglore","India");

const person1 = {
    firstName: 'Ajit',
    lastName: 'Singh'
};

// person1.fullName("Banglore","India");// × × × 

person.fullName.call(person1, 'Varanasi', 'India'); 
/*
In JavaScript, a "call" can refer to several different concepts,
 such as calling a function, using the .call() method to invoke a function with a specified `this` value and arguments,
 or making an API call.
 Here are examples for each:

1. Calling a Function
You can simply call a function by using its name followed by parentheses.

javascript
Copy code
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet('Ajit'); // Output: Hello, Ajit!
2. Using .call() Method
The .call() method calls a function with a given this value and arguments provided individually.

javascript
Copy code
const person = {
    fullName: function(city, country) {
        console.log(`${this.firstName} ${this.lastName}, ${city}, ${country}`);
    }
};

const person1 = {
    firstName: 'Ajit',
    lastName: 'Singh'
};

person.fullName.call(person1, 'Delhi', 'India'); 
// Output: Ajit Singh, Delhi, India
3. Making an API Call
You can make an API call using fetch, axios, or other HTTP libraries. Here’s an example using fetch:

javascript
Copy code
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
*/