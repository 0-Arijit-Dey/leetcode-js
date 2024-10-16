// 283. Move Zeroes

var moveZeroes = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if(nums[i] === 0){
        let temp = nums[i+1]
        nums[i+1] = nums[i]
        nums[i] = temp
    }
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12])); // ------> [1,3,12,0,0]
