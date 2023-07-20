const n = "10";
const x = 1.999;
function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
function increment(n = 742) {
  return ++n;
}
console.log(increment());
function decrement(n) {
  return --n;
}
decrement(n);

console.log(add(100, 293));

parseInt(n);
parseFloat("10.29299");

function makeInt(n) {
  return parseInt(n, 10);
}
makeInt(n, 10);

function preserveDecimal(x) {
  return parseFloat(x);
}
preserveDecimal(x);
