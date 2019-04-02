// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.



/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/
const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
    return cb(arr.length);
}
  // HOF getLength invoked
    getLength(items, function(myLength){
      console.log(myLength);
    })



function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1])
}
  // HOF last invoked
  last(items, function(finalItem){
    console.log(finalItem);
  })



function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y)
}
// HOF sumNums invoked
  sumNums(10, 15, function(finalSum){
    console.log(finalSum);
  })


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y)
}
  // HOF multiplyNums invoked
  multiplyNums(10, 15, function(product){
    console.log(product)
  })

function contains(items, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(list.includes(items))
}
  // HOF contains invoked
  // true test
    contains("Pencil", items, function(tfTest){
      console.log(tfTest);
    })
  // false test
  contains("Ruler", items, function(tfTest){
    console.log(tfTest);
  })
/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
