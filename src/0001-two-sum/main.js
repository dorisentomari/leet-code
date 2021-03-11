const twoSum1 = (nums, target) => {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i);
        result.push(j);
        break;
      }
    }
  }
  return result;
};

// 哈希表，空间换时间
const twoSum2 = (nums, target) => {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (obj[diff] >= 0) {
      return [obj[diff], i];
    }
    obj[nums[i]] = i;
  }
};

const nums = [1, 4, 6, 8, 11];
const target = 10;

console.log(twoSum1(nums, target));
console.log(twoSum2(nums, target));

