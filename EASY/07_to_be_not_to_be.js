// 2704. To Be Or Not To Be

var expect = function (val) {
  return {
    toBe: function (para) {
      if (val === para) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (para) {
      if (val !== para) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};

console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(5)); // throws "Equal"
