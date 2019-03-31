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

/* Now declare a constant in global scope called leastFavoriteCustomer customer. Ok, now write a function called changeLeastFavoriteCustomer that attempts
to change that constant - notice what Javascript does when you try to change the constant. */
const leastFavoriteCustomer = 'steve';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'bill';
}

/* Now write another function that will break down. Try declaring a variable called favoriteCustomer and redeclaring that same variable such that an error is thrown.
This helps illustrate how let only allows a given variable to be declared one time, but that variable can be re-assigned to a different value. However, const does
not allow re-assignment, nor does it allow the same constant to be declared more than once. */
let favoriteCustomer = 'bob';

function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = 'steve';
}
