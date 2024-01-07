const MAX_NUMBER=10;
const firstBadVersion=function (n) {
    let right = n, left = 0
    while (left <= right) {
        const m = Math.floor((left + right) / 2)
        if (isBadVersion(m))
            right = m - 1
        else {
            left = m + 1
        }
    }
    return left

};

//isBadVersion will be given and returns boolean value
const isBadVersion=(m,maxLimit = MAX_NUMBER) =>{
    let rand = Math.random() * maxLimit;
    return m===Math.floor(rand);
   }
console.log(firstBadVersion(MAX_NUMBER))