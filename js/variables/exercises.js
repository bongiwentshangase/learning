1.// swap the values of 2 variables
let b1 = 3;
let b2 = 7;
let swap;

swap = b1;
b1 = b2;
b2 = swap;




function printxyz() {
    console.log(`x = ${x}`);
    console.log(`y = ${y}`);
    console.log(`z = ${z}`);
}



// 2.write the values of x , y and z after each line.

let x = 3;
let y = 5;
let z = 7;
printxyz();
console.log("------------------------")
console.log("z=y");
z = y;

printxyz();
console.log("------------------------")
console.log("y = z * x")
y = z * x;

printxyz();
console.log("------------------------")
console.log("x=x+5;")
x = x + 5;

printxyz();
console.log("------------------------")
y++;
printxyz();
console.log("------------------------")
z = y + x;

printxyz();
console.log("------------------------")
y *= 2;
printxyz();