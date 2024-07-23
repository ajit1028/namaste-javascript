
const User = {
    name:"chai",
    email:"chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__:TeachingSupport // to get proerties of another object (TeachingSupport)
}
//prototypal inheritance how to access key and properties of other
Teacher.__proto__= User;


//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "ChaiAurCode    ";

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();
"hitesh".trueLength();
"iceTea".trueLength();