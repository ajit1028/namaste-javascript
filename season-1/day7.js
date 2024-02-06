var a = 100;
{
 var a = 10; // same name as global var
 let b = 20;
 const c = 30;
 console.log(a); // 10
 console.log(b); // 20
 console.log(c); // 30
}
console.log(a)

/////////////
{
    var a = 10;
    let b = 20;
    const c = 30;
   }
   console.log(a); // 10
   console.log(b); // Uncaught ReferenceError: b is not defined