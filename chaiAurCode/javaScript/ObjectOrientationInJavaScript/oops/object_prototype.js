// function multiplyBy5(num){
//     return 5*num;
// }

// multiplyBy5.power = 2;
// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);




function createUser(uesrname, score){
    this.uesrname = uesrname
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++;
//  console.log(this.score);
    return this.score;
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai =new  createUser("chai", 25);
const tea =new  createUser("tea", 250);

chai.printMe();
console.log(tea.increment());