// 2635. Apply Transform Over Each Element in Array
const arr = [1, 2, 3];
const plusone = (n) => n + 1;
const plusI = (n, i) => n + i;
const constant = () => 42;

var map = function (arr, fn) {
  const modefiedArr = [];
  arr.forEach((element, i) => {
    modefiedArr.push(fn(element, i));
  });
  return modefiedArr;
};

const newArray1 = map(arr, plusone);
const newArray2 = map(arr, plusI);
const newArray3 = map(arr, constant);

console.log(newArray1); // [ 2, 3, 4 ]
console.log(newArray2); // [ 1, 3, 5 ]
console.log(newArray3); // [ 42, 42, 42 ]
