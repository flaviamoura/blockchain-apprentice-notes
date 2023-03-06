# Tutorial JavaScript Basics 👩‍💻 

> JavaScript is a high-level, interpreted programming language used primarily to create interactive web pages and dynamic user interfaces. It is commonly used for both front-end and back-end development.

## Sumário
- [Basics](#variables)
- [Operators](#operators)
- [Control Flow](#control-flow)

### Variables
```
let name = 'Hello';
var year = 2023;
const interestRate = 0.3;
```
**Variable names:**
- Cannot be a reserved keyword
- Should be meaningful
- Cannot start with a number (1name)
- Cannot contain a space or hyphen (-)
- Are case-sensitive

### Primitive Types
```
let name = 'Mosh'; // String Literal
let age = 30; // Number Literal
let isApproved = true; // Boolean Literal
let firstName = undefined;
let selectedColor = null;
```
### Data types
You can use the **typeof** operator to check the data type of a variable. For example:
```
typeof 5; // "number"
typeof "hello"; // "string"
typeof true; // "boolean"
typeof {}; // "object"
typeof []; // "object"
```

### Objects
```
let person = {
   name: 'Mosh',
   age: 30
}

// Dot Notation
person.name = 'John';
// Bracket Notation
let selection = 'name';
person[selection] ='Mary';

console.log(person.name);
```
### Array
```
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors.length);
```

### Functions
```
// Performing a task
function greet(name, lastName) {
   console.log('Hello' + name + ' ' + lastName);
}

// Calculating a value
function square(number) {
   return number * number;
}

console.log(square(2));
```
---
# Operators

### Arithmetic Operators
```
let x = 10;
let y = 4;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y); // Modulus
console.log(x ** y); // Exponentiation

//Increment ++
console.log(x++);

//Decrement --
console.log(--x)
```
### Assignment Operators
```
// += (Addition Assignment Operator)
let x = 5;
x += 3; // Equivalent to x = x + 3;
console.log(x); // Output: 8

// *= (Multiplication Assignment Operator)
let x = 5;
x *= 3; // Equivalent to x = x * 3;
console.log(x); // Output: 15
```
### Comparison Operators
```
let x = 1;

// Relational
console.log(x > y);
console.log(x >= y);
console.log(x < y);
console.log(x <= y);

// Equality
console.log(x === 1); 
console.log(x !== 1);
```
### Equality Operators
```
// Strict Equality (Type + Value)
console.log(1 === 1);
console.log('1' === 1);

// Lose Equality (Value)
console.log(1 == 1);
console.log('1' == 1);
console.log(true == 1);
```
### Ternary Operators
```
condition ? value_if_true : value_if_false;
```

### Logical Operators with Non-booleans
```
// Logical AND (&&)
// Returns TRUE if both operands are TRUE
console.log(true && false);

// Logical OR (||)
// Returns TRUE if one of the operands is TRUE
let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
console.log('Eligible', eligibleForLoan);

// NOT (!)
let applicationRefused = !eligibleForLoan;
console.log('Application Refused', applicationRefused);
```
---
# Control Flow
> Simple Syntax Examples: 

### If...else
```
if (x > 5) {
  console.log("x is greater than 5");
} else {
  console.log("x is less than or equal to 5");
}
```
### Switch...case
```
switch (dayOfWeek) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  default:
    console.log("Today is not Monday or Tuesday");
}
```
### For
```
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```
### While
```
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

```
### Do...while
```
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);

```
