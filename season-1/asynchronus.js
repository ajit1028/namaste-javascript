// console.log("start");
// setTimeout(function cb() {
//  console.log("timer");
// }, 5000);
// console.log("end");


console.log("Start"); // this calls the console web api (through window) which in turnactually modifies values in console.
setTimeout(function cbT() {
 console.log("CB Timeout");
}, 5000);
fetch("https://api.netflix.com").then(function cbF() {
 console.log("CB Netflix");
}); // take 2 seconds to bring response
// millions lines of code
console.log("End");

