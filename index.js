// We're going to assume creditCardNum is a string.

let creditCardNum = ['9999777788880000', '6666666666661666', 'a92332119c011112', '4444444444444444', '1211111111111112', '1111111111111110']

function validateCreditCard(creditCardNum) {
 for (i=0; i < creditCardNum.length; i=i+1) {
   if (creditCardNum(!isInteger)) {
   return true
 } else if {
   return false
 }
};

// function validateCreditCard(creditCardNum) {

//  };


//   const nameInput = document.querySelector('input[type=text]');
//   const emailInput = document.querySelector('input[type=email]');
//   const passInput = document.querySelector('input[type=password]');
//   const form = document.querySelector('form')
//   form.addEventListener('submit', function (e) {

//     //prevent the normal submission of the form
//     e.preventDefault();
//     console.log(nameInput.value); 
//     console.log(emailInput.value);
//     console.log(passInput.value);
// });
// 

// sendIt()

/**
 * Think of these as tests. Write out your function
 * above so these console.logs below return what you
 * expect.
 */
console.log(validateCreditCard("9999777788880000")); // => true
console.log(validateCreditCard("6666666666661666")); // => true
console.log(validateCreditCard("a92332119c011112")); // => false
console.log(validateCreditCard("4444444444444444")); // => false
console.log(validateCreditCard("1211111111111112")); // => true
console.log(validateCreditCard("1111111111111110")); // => false
