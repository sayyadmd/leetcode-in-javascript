var plusOne = function (digits) {
    const al = digits.length

    for (let i = al - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++
            return digits;
        }
        digits[i] = 0
    }
    digits.unshift(1);
    return digits;
};