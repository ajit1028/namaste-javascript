//map function
// It is basically used to transform a array. The map() method creates a new array with the results of calling a
// function for every array element.
// const arr = [5,1,3,2,6];

// function double(x){
//     return 2 * x;
// }
// const doubleArr = arr.map(double);

//  const dobuleArr = arr.map((x)=>2*x);
// console.log(dobuleArr);
// console.log(arr);


//filter function
// Filter function is basically used to filter the value inside an array. The arr.filter() method is used to create a
//new array from a given array consisting of only those elements from the given array which satisfy a condition
//set by the argument method.

//const array = [5, 1, 3, 2, 6];

// function isOdd(x) {
//  return x % 2;
// }
// const oddArr = array.filter(isOdd); // [5,1,3]
// console.log(oddArr);
//Other way of writing the above:
// const oddArr = array.filter((x) => x % 2);
// console.log(oddArr);


//Reduce function
// It is a function which take all the values of array and gives a single output of it. It reduces the array to give a
// single output.

//const arr= [5, 1, 3, 2, 6];
// Calculate sum of elements of array - Non functional programming way
// function findSum(arr) {
//  let sum = 0;
//  for (let i = 0; i < arr.length; i++) {
//  sum = sum + arr[i];
//  }
//  return sum;
// }
// console.log(findSum(array)); // 17

// const sumOfElem = arr.reduce(function (accumulator, current) {
     // current represent the value of array
     // accumulator is used the result from element of array.
    // In comparison to previous code snippet, *sum* variable is *accumulator* and *arr[i]* is *current*
//     accumulator = accumulator + current;
//     return accumulator;
//    }, 0); //In above example sum was initialized with 0, so over here accumulator also needsto be initialized, so the second argument to reduce function represent the initializationvalue.
//    console.log(sumOfElem); // 17
   