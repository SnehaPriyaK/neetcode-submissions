class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const numObject: Record<number, number> = {};
        for (const num of nums) {
        numObject[num] = (numObject[num] ?? 0) + 1;
        }
        return Object.entries(numObject)
        .sort(([, countA], [, countB]) => countB - countA)
        .slice(0, k)
        .map(([key]) => +key); 
    }
}
