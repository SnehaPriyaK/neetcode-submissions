class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const seen = new Map<number, number>();
        for(let i = 0; i < nums.length; i++){
            let combination = target - nums[i];
            if(seen.has(combination)){
                return [seen.get(combination), i]
            }
            else
                seen.set(nums[i], i);
        }
    }
}
