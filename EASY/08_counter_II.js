// 2665. Counter II
var createCounter = function (init) {
  let defult = init;
  return {
    increment: function () {
      defult++;
      return defult;
    },
    decrement: function () {
      defult--;
      return defult;
    },
    reset: function () {
      defult = init;
      return init;
    },
  };
};

const counter = createCounter(5);

console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
