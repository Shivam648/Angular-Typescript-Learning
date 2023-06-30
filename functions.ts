function add(num1: number, num2: number, num3?: number): number {
  return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(10, 20, 30));

// function add1(num1: number, num2: number) {
//   return num1 + num2;
// }
// console.log(add1(10, 20));

// const sub = (num1: number, num2: number): number => num1 - num2;
// console.log(sub(10, 20));

// const mult = function (num1: number, num2: number): number {
//   return num1 * num2;
// };
// console.log(mult(10, 20));
