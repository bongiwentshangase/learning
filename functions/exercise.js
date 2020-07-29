function printxyz(title) {
    console.log(title);
    console.log(`x = ${x}`);
    console.log(`y = ${y}`);
    console.log(`z = ${z}`);
    console.log("------------------------")
}


// 2.write the values of x , y and z after each line.

let x = 3;
let y = 5;
let z = 7;
printxyz("start values");


z = y;

printxyz("z=y");


y = z * x;

printxyz("y = z * x");


x = x + 5;

printxyz("x = x + 5");

y++;
printxyz("y++");

z = y + x;

printxyz("z = y + x");

y *= 2;
printxyz("y *= 2");



