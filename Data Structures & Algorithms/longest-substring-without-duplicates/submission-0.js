/**
 * Approach
 *  - Use a sliding window with a Set to keep track of the current window as we move it
 *      - Use a set since we want to quickly check if there are duplicates or not
 *  - Use a variable longest to keep track of longest subtring
 *  - Using left & right pointers both starting at 0:
 *      - First check if char at right pointer is already in Set (duplicate)
 *          - If so, need to move left pointer
 *          - Remove char at left from Set (leaves window), move left pointer by 1
 *              - Do this until char at right is no longer a duplicate
 *       - Add char at right pointer
 *       - Update longest length at every iteration with Math.max, and window size (right - left + 1)
 *  - Iterate until right reaches end
 *      
 * 
 */

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set();
        let longest = 0;
        let left = 0;

        for (let right = 0; right < s.length; right++) {
            // Check if right char is dupe in Set, if so remove from window 
            while (set.has(s[right])) {
                set.delete(s[left]);
                left++;
            }

            // No duplicate --> add to window
            set.add(s[right]);

            // Update longest
            longest = Math.max(longest, right - left + 1);
        }

        return longest;
    }
}

/**
 * Time: O(n) - Use a sliding window where each char enters and leaves window at most once
 * Space: O(n) - Worse case all unique characters in string where the Set is size n
 * 
 */
