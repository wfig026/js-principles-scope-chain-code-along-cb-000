/* Your code goes here */

// Declare a variable in global scope called customerName using the var keyword.
var customerName = 'bob';

// Write a function that accesses that global customerName variable, and uppercases it.
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Write a function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'
function setBestCustomer() {
  const bestCustomer = 'not bob';
}
