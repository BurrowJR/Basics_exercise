console.log('Hello, world!');
console.log();

let count = 1;

let header = "Basics Exercise ";

// Basics Exercise 1
console.log(header + `${count = 1}`);
let firstName = "Johnna";
let lastName = "Burrow";
console.log("My name is" + " " + firstName + " " + lastName + ".");
console.log();
// Basics Exercise 2
console.log(header + `${count += 1}`);
const number1 = 4936
let number = 4936;
// Ones place
let ones = number % 10;
console.log(ones + " is in the ones place of the number " + number1 + ".");
// Tenths place
number = (number - ones) / 10;
let tens = number % 10;
console.log(tens + " is in the tenths place of the number " + number1 + ".");
// Hundreds place
number = (number - tens) / 10;
let hundreds = number % 10;
console.log(hundreds + " is in the hundreds place of the number " + number1 + ".");
// Thousands place
let thousands = (number - hundreds) / 10;
console.log(thousands + " is in the thousands place of the number " + number1 + ".");
console.log();
// Basics Exercise 3
console.log(header + `${count += 1}`);
console.log("'true' is a " + typeof 'true' + " data type");
console.log("false is a " + typeof false + " data type");
console.log("1.5 is a " + typeof 1.5 + " data type");
console.log("2 is a " + typeof 2 + " data type");
console.log("undefined is an " + typeof undefined + " data type");
console.log("{ foo: 'bar' } is a " + typeof { foo: 'bar'} + " data type");
console.log();
// Basics Exercise 4 & 5
console.log(header + `${count += 1}` + " & " + `${count += 1}`);
console.log("console.log('5' + 10) logs '510' because the '5' is in single quotes, making it a string so it gets concatenated into a string 510 instead of being added as a number 15.  If it was just a 5 then it would log 15 this only applies to + sign.");
console.log('5' + 10);
console.log(5 + 10);
console.log('5' - 10);
console.log(5 - 10);
console.log('5' * 10);
console.log(5 * 10);
console.log("Ways to force it into a number Number('5') + 10) and parseInt('5', 10) + 10)");
console.log(Number('5') + 10);
console.log(parseInt('5', 10) + 10);
console.log("Looks like it would be easier to take the single quotes off?????");
console.log();
// Basics Exercise 6
console.log(header + `${count += 1}`);
// Template literal syntax
console.log(`The value of 5 + 10 is ${Number('5') + 10}.`);
console.log();
// Basics Exercise 7
console.log(header + `${count += 1}`);
let foo = ['a', 'b', 'c'];
console.log(foo.length);
console.log(foo[3]);
console.log("This result in 'undefined' becuase you only have elements 0, 1, 2.");
console.log();
// Basics Exercise 8
console.log(header + `${count += 1}`)
let names = ['Asta', 'Butterscotch', 'Pudding', 'Neptune', 'Darwin'];
console.log(names [2]);
console.log();
// Basics Exercise 9
console.log(header + `${count += 1}`);
let pets = {
  Asta:         'dog',
  Butterscotch: 'cat',
  Pudding:      'cat',
  Neptune:      'fish',
  Darwin:       'lizard',
};
console.log(pets);
console.log();
// Basics Exercise 10
console.log(header + `${count += 1}`);
console.log('foo' === 'Foo');
console.log("'foo' === 'Foo' is false because the 2nd Foo is capitalized");
console.log();
// Basics Exercise 11
console.log(header + `${count += 1}`);
console.log(parseInt('3.1415'));
console.log(parseFloat('3.1415'));
console.log(parseInt('.3145'));
console.log(parseInt('356.2345'));
console.log();
// Basics Exercise 12
console.log(header + `${count += 1}`);
console.log('12' < '9');
console.log(12 < 9 );
console.log("When comparing strings js looks at the first number and compares them so in the '12' < '9' it is comparing 1 and 9.");
