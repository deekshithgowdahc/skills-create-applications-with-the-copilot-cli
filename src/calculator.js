#!/usr/bin/env node
// src/calculator.js - Node.js CLI wrapper around calculator functions
// Supported operations: add, sub, mul, div

const { add, sub, mul, div } = require('./lib/calculator');

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
  case 'add':
    result = add(a, b);
    break;
  case 'sub':
    result = sub(a, b);
    break;
  case 'mul':
    result = mul(a, b);
    break;
  case 'div':
    try {
      result = div(a, b);
    } catch (e) {
      console.error('Error:', e.message);
      process.exit(2);
    }
    break;
  default:
    console.error('Error: unsupported operation. Use add, sub, mul, or div');
    process.exit(2);
}

console.log(result);
