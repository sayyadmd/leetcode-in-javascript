var search = function (nums, target) {
    const al = nums.length;
    let leftPointer = 0, rightPointer = al - 1
    while (leftPointer <= rightPointer) {
        const mid = Math.round((leftPointer + rightPointer) / 2);
        if (target === nums[mid]) { return mid }
        else if (target > nums[mid]) {
            leftPointer = mid + 1
        }
        else {
            rightPointer = mid - 1
        }
    }
    return -1
};
console.log(search([-1,0,3,5,9,12],9))