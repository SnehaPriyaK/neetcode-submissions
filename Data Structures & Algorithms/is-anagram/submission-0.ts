class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    stringToMap(arr: string[]): Map<string, number> {
        const map = new Map();
        for(let a of arr){
            if(map.has(a)){
                let val = map.get(a);
                map.set(a, val+1);
            }
            else{
                map.set(a, 1);
            }
        }
        return map;
    }
    isAnagram(s: string, t: string): boolean {
        if(s.length===t.length){
            const sMap = this.stringToMap(s.split(''));
            const tMap = this.stringToMap(t.split(''));
            let isSame = true;
            for (let sArr of s.split(''))
            {
                let sMapValue = sMap.get(sArr);
                let tMapValue = tMap.get(sArr);
                if(sMapValue != tMapValue)
                    isSame = false;
            }
            return isSame;
        }
        return false;
    }
}
