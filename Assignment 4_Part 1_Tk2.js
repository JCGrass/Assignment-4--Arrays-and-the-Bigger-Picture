// Assignment 4, Part 1 // My version of the ES2015 "Set" type

let test_set = [1,2,3], new_set;

function myset_add(array, 1,2,3) {
}

new_set = myset_add.push(test_set, 1);
if ( ! arrays_equal(new_set.sort(), [1,2,3]) ) {
  console.log("Failed adding existing data");
}

new_set = myset_add.push(test_set, 2);
if ( ! arrays_equal(new_set.sort(), [1,2,3,4]) ) {
  console.log("Failed adding new data");
}

new_set = myset_add.push(test_set, 3);
if ( ! arrays_equal(new_set.sort(), [1,2,3,4]) ) {
  console.log("Failed adding new data");
}

function myset_remove(array, 1,2,3) {
}

test_set = [1,2,3];
new_set = myset_remove(test_set, 3);
if ( ! arrays_equal(new_set.sort(), [1,2]) ) {
  console.log("Remove failed");
}

// Return true if test_value is in the set, false otherwise function myset_has(data, test_value) { ... }
function myset_has(data, test_value) { ... }

function myset_size(data) { ... }
