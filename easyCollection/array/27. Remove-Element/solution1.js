var removeElement = function (nums, val) {
    
    let j = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[j++] = nums[i];
        }
    }

    // Set the remaining elements to 0 (if any)
    for (let i = j; i < nums.length; i++) {
        nums[i] = 0;
    }

    return j;
};