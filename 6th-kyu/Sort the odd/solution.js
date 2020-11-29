function sortArray(array) {
    nums = [];
array
    .filter((v, i) => v % 2 && nums.push(i))
    .sort((a, b) => a - b)
    .forEach((v, i) => array[nums[i]] = v);

return array;
}