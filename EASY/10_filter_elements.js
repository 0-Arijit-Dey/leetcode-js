// 2634. Filter Elements from Array

const arr1 = [0, 10, 20, 30];
const arr2 = [1, 2, 3];
const arr3 = [-2, -1, 0, 1, 2];
const greaterThan10 = (n) => n > 10;
const firstIndex = (n, i) => i === 0;
const plusOne = (n) => n + 1;

var filter = function (arr, fn) {
  const modefiedArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      modefiedArray.push(arr[i]);
    }
  }

  return modefiedArray;
};

const newArray1 = filter(arr1, greaterThan10);
const newArray2 = filter(arr2, firstIndex);
const newArray3 = filter(arr3, plusOne);

console.log(newArray1);
console.log(newArray2);
console.log(newArray3);
