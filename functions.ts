function add(num1: number, num2: number) {
  return num1 + num2;
}

console.log(add(10, 20));

const sub = (num1: number, num2: number): number => num1 - num2;
console.log(sub(10, 20));

const mult = function (num1: number, num2: number): number {
  return num1 * num2;
};
console.log(mult(10, 20));
