
// function y(x)
// {
//     x();
// }
// y(function x()
// {
//     console.log("hi");
// });

const radius = [1,2,3,4];
const area = function (radius)
{
    return Math.PI * radius * radius;
}

const circumference = function( radius)
{
    return 2 * Math.PI * radius;
}

const calculate = function(radius, operation)
{
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(operation(radius[i]));
        }
        return output;
}
console.log(calculate(radius, area));
console.log(calculate(radius, circumference));

