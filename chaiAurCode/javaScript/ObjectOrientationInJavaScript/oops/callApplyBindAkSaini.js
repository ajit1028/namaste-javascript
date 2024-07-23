let name = {
    firstName: "Akshay",
    lastName: "Saini",
}

let printFullName = function(hometown,state) {
    console.log(this.firstName + " " + this.lastName +" from "+hometown+", "+"state"+" "+state) ;
}

//.call()===>function borrowing ,borrow function of other object and use it 
//          with data of some other object


//printFullName.call(name,"Dehradun","Utterakhand");// .call()

//printFullName.apply(name,["Dehradun","Utterakhand"]);// .apply()


let name2 ={
    firstName:"Sachin",
    lastName:"Tendulkar",
}

 //printFullName.call(name2,"Mumbai","Maharashtra");

 //printFullName.apply(name2,["Mumbai","Maharashtra"]);

 //bind methd 
 let printMyName = printFullName.bind(name2,"Mumbai","Maharashtra");
console.log(printMyName);
printMyName();