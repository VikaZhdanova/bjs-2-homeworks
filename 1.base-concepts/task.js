'use strict';

function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  console.log(d);
  if (d < 0) {
    return arr;
  } else if (d === 0) {
    let x = -b / (2 * a);
    console.log(x);
    return [x];
  } else if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    console.log(x1);
    console.log(x2);
    return [x1,x2];
  }
}
