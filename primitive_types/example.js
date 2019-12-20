var customerName = "John"; // Assigned a string literal.
var accountBalance = 2000; // Assigned a number.
var isValid = true; // Assigned a boolean.

var object = null; // Asssigned a NULL value. this means the 'object' is pointing at nothing.

var x; // JS automatically assigns a value UNDEFINED to this as we haven't assigned one.
var y = undefined; // We can also assign undefined as a valid primitive type value like JS would do.

// If we do this:
x = 5;
y = x;
y = 15;

// And then we print the values, we would see that the values are x = 5 and y = 15. This is because as stated in the notes, JS directly assigns
// the value to the variables, and hence changing the value of y doesn't affect the value of x. 

x = 123;
y = "123"; // we can reassign a different primitive type as ES6 is loosely typed.
console.log( (x == y) ); // this will print "true" as y, when converted to number type, has the same value as x.
console.log( (x === y) ); // this will pring "false" as JS will ignore the type conversion and x and y are not of the same types.


// Some handy methods available on primitive types: 

// getting a string representation of any primitive type.
x = 5;
console.log(typeof x.toString()); // will print 'string' as toString() returns a string representation of the variable value.
isValid = false;
console.log(typeof isValid.toString()); // will also print 'string'

// getting a substring from any string
var str = "My name is John";
console.log(str.substring(3, 6)); // Will extract and return the substring "name" from the index number 3 to index number 6. 
str = str.replace('name', 'first name');
console.log(str); // will print the string with the substring 'name' replaced by 'first name'.