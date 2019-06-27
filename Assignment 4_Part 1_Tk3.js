// Assignment 4, Part 1, Try 3 // My version of the ES2015 "Set" type // Help taken from the Week 5 chat archive


function myset_add(myArray, myValue)
let myArray = ['1', '2', '3'];
console.log(myArray);


set_add(myArray, '3');
function set_add(theArray, theValue){
  for(let i = 0; i < theArray.length; i++){
    console.log(theArray[i]);
    console.log(theValue);
    return myArray;
  }
  myArray.push(theValue);
  return myArray;
}






//
//
//
// function myset_add(anArray, aValue){
//   let test_set = [1,2,3], new_set;
// }
//
// new_set = myset_add([1,2,3],4);
// if ( ! arrays_equal(new_set.sort(), [1,2,3,4]) ) {
//   console.log("Failed adding existing data");
// }
//
// new_set = myset_add([1,2,3],4);
// if ( ! arrays_equal(new_set.sort(), [1,2,3,4]) ) {
//   console.log("Failed adding new data");
// }
//
// new_set = myset_add.([1,2,3],4);
// if ( ! arrays_equal(new_set.sort(), [1,2,3,4]) ) {
//   console.log("Failed adding new data");
// }
//
// function myset_remove(anotherArray, anotherValue) {
//     let test_set = [1,2,3], new_set;
// }
//
// test_set = [1,2,3];
// new_set = myset_remove(anotherArray, 3);
// if ( ! arrays_equal(new_set.sort(), [1,2]) ) {
//   console.log("Remove failed");
// }
//
// // Return true if test_value is in the set, false otherwise function myset_has(data, test_value) { ... }
// function myset_has(anotherArray, anotherValue) { ... }
//
// function myset_size(anotherArray, anotherValue) { ... }
