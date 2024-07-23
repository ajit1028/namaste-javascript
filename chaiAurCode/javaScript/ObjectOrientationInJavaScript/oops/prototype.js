 
let myHeros = ["thor","spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spidy poweer is ${this.spiderman}`);
    }
}


Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all object`);
}

// heroPower.hitesh();

// myHeros.hitesh();

Array.prototype.heyHitesh = function(){
    console.log(`hitesh says hello`);
}
// myHeros.heyHitesh();

// heroPower.heyHitesh();



/*
  function,array,string are objects in javascript. if you give any property to object it is automatically inherited by function,
  array,string. but not in same level or not in child to parent.
*/




