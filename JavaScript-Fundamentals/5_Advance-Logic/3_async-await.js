/*
"async and await make promises easier to write"

async makes a function return a Promise

await makes a function wait for a Promise
*/
function print(v){
       console.log(v)
}

async function myFunction() {
       return "Hello"
}

// above example is same as:

function myFunction2() {
return Promise.resolve("Hello");
}
myFunction2().then(
function(value) { print(value) },
function(error) { print(value) }
);


// SYNTAX FOR ASYNC FUNCTION
async function JSLearner(){
       let isMyPromise =await new Promise(function (resolve, reject){

              // there could be any condition
              if(resolve != null){
                     resolve("IsAccepted and Successsful")
              }else{
                     reject("IsRejected and Failed")
              }
       })

       print(isMyPromise)
}

await JSLearner()