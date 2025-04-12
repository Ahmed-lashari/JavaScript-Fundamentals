// A Promise is a JavaScript object that represents the eventual completion (or failure) of an asynchronous operation, and its resulting value

//Before Promises, we used nested callbacks, which turned into callback hell 

//Promises give a cleaner, structured way to handle asynchronous code (like fetching data from server, or running timer etc).
function print(v){
       console.log(v)
}


/*

A JavaScript Promise object can be:

Pending
Fulfilled
Rejected
The Promise object supports two properties: state and result.

While a Promise object is "pending" (working), the result is undefined.

When a Promise object is "fulfilled", the result is a value.

When a Promise object is "rejected", the result is an error object.
*/

let myPromise = new Promise(function(myResolve, myReject) {
//will take some time ,producing code for (myResolve and myReject) fucntions
       
       // some sondition (could be fetching an api, sending a network call, or opening a file etc)
       myResolve("Successful"); // when successful
       
       // call back fucntion 
       myReject("Failed");  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
       function(value) { print("value= "+value)},
       function(error) { print("error ="+error) }

);


// SUMMARY

// promosis are an alternative for the callback functions with more effortless bolerplate code and easily debuggable approach in case or error handling and code executing