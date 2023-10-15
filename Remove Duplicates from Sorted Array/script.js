const removeDuplicates1 = function (nums) {
  let result = nums.filter((value, index) => nums.indexOf(value) === index);
  nums.splice(0, nums.length, ...result);
  return result.length;
};


const removeDuplicates2 = function (nums) {
  nums.splice(0, nums.length, ...new Set(nums));
  return nums.length;
};


const removeDuplicates3 = function (nums) {
  if (nums.length === 0) {
    return 0
  }
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i]
      k++
    }
  }
  console.log(k)
  return k
}