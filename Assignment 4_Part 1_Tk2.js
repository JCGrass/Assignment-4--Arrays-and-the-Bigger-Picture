// Assignment 4, Part 1 // My version of the ES2015 "Set" type


function myset_add(anArray, aValue){
  let test_set = [1,2,3], new_set;
}

new_set = myset_add([1,2,3],4);
if ( ! arrays_equal(new_set.sort(), [1,2,3,4]) ) {
  console.log("Failed adding existing data");
}

new_set = myset_add([1,2,3],4);
if ( ! arrays_equal(new_set.sort(), [1,2,3,4]) ) {
  console.log("Failed adding new data");
}

new_set = myset_add.([1,2,3],4);
if ( ! arrays_equal(new_set.sort(), [1,2,3,4]) ) {
  console.log("Failed adding new data");
}

function myset_remove(anotherArray, anotherValue) {
    let test_set = [1,2,3], new_set;
}

test_set = [1,2,3];
new_set = myset_remove(anotherArray, 3);
if ( ! arrays_equal(new_set.sort(), [1,2]) ) {
  console.log("Remove failed");
}

// Return true if test_value is in the set, false otherwise function myset_has(data, test_value) { ... }
function myset_has(anotherArray, anotherValue) { ... }

function myset_size(anotherArray, anotherValue) { ... }
