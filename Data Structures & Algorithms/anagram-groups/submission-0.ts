class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */


    groupAnagrams(strs: string[]): string[][] {
        const seen = new Map<string, string[]>
        for (let str of strs){
            let sortStr = str.split('').sort().join('');
            if(seen.has(sortStr)){
                const newData = seen.get(sortStr)!;
                seen.set(sortStr,[...newData, str]);
            }
            else seen.set(sortStr, [str])
        }
        let finalData: string[][] = [];
        seen.forEach((key, value) => {
            finalData.push(key)});
        return finalData;
    }
}