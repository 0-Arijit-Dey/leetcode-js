// 2626. Array Reduce Transformation

const nums = [1, 2, 3, 4];

const sum1 = (accum, curr) => accum + curr;
const sum2 = (accum, curr) => accum + curr * curr;
const sum3 = (accum, curr) => 0;

var reduce = function (nums, fn, init) {
  const modefiedArr = [];
  for (let i = 0; i < nums.length; i++) {
    modefiedArr.push(fn(init, nums[i]));
    init = modefiedArr.pop();
  }

  return init;
};

const result1 = reduce(nums, sum1, 0);
const result2 = reduce(nums, sum2, 100);
const result3 = reduce(nums, sum3, 25);

console.log(result1);
console.log(result2);
console.log(result3);
