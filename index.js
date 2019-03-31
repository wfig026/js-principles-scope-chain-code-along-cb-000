/* Your code goes here */

// Declare a variable in global scope called customerName using the var keyword.
var customerName = 'bob';

// Write a function that accesses that global customerName variable, and uppercases it.
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

/* Write a function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'
   Also, poor us, declaring a global variable from inside a function is one of those things we would never want to do normally,
   but is good for us to explore right now. */
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// See the consequences of declaring a variable in global scope, by writing a new function called overWriteBestCustomer that changes that bestCustomer variable
function overWriteBestCustomer() {
  bestCustomer = 'maybe bob';
}
