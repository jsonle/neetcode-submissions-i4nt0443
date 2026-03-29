class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // If length of strings are different -> return false
        if (s.length !== t.length) {
            return false;
        }

        // Use a hash for both input strings to keep track of each character and how many
        let sHash = {};
        let tHash = {};

        // Iterate through both strings s and t
        for (let i = 0; i < s.length; i++) {
            // Add each character to hash with key being the character, and value being the number of times it shows up in string
            sHash[s[i]] = sHash[s[i]] === undefined ? 1 : sHash[s[i]] + 1;
            tHash[t[i]] = tHash[t[i]] === undefined ? 1 : tHash[t[i]] + 1;
        }

        // Compare each hash by iterating through a string and checking if they have same values
        for (let c in sHash) {
            if (sHash[c] !== tHash[c]) {
                return false
            }
        }

        return true;
    }
}
