/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    	let result = [];
        let n = nums.length

	for (var i = 0; i < n; i++) {
		for (var j = i + 1; j < n; j++) {
			if (nums[i] + nums[j] === target) {
				result.push(i);
				result.push(j);
			}
		}
	}
	return result;
};
