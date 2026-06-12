#!/usr/bin/env node
// src/calculator.js - Node.js CLI calculator
// Supported operations:
// - addition (add)
// - subtraction (sub)
// - multiplication (mul)
// - division (div)

const [,, op, aStr, bStr] = process.argv;

function usage() {
  console.error('Usage: node src/calculator.js <add|sub|mul|div> <num1> <num2>');
  process.exit(2);
}

if (!op || aStr === undefined || bStr === undefined) usage();

const a = Number(aStr);
const b = Number(bStr);
if (Number.isNaN(a) || Number.isNaN(b)) {
  console.error('Error: operands must be numbers');
  process.exit(2);
}

let result;
switch (op) {
  case 'add': // addition
    result = a + b;
    break;
  case 'sub': // subtraction
    result = a - b;
    break;
  case 'mul': // multiplication
    result = a * b;
    break;
  case 'div': // division
    if (b === 0) {
      console.error('Error: division by zero');
      process.exit(2);
    }
    result = a / b;
    break;
  default:
    console.error('Error: unsupported operation. Use add, sub, mul, or div');
    process.exit(2);
}

console.log(result);
