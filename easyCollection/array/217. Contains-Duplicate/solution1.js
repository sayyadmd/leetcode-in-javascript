var containsDuplicate = function(nums) {
    const set = new Set()
    const al=nums.length
    for(let i=0;i<al;i++)
   {
        if(set.has(nums[i])){
            return true
        }
        else{
            set.add(nums[i])
        }
    }
    return false
};