// 2666. Allow One Function Call

var once = function (fn) {
  let Called = false;
  let result;

  return function (...args) {
    if (!Called) {
      result = fn(...args);
      Called = true;
      return result;
    } else {
      return undefined;
    }
  };
};

const fn = (a, b, c) => a + b + c;
const onceFn = once(fn);

console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // returns undefined without calling fn
