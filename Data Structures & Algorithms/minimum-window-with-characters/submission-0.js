/**
 *  Approach
 *  - Use a hash map to hold chars of t and its frequencies. This is what we 'need'
 *  - Use a hash map to hold the current window as we slide it through s. This is what we 'have'
 *  - Keep track of best length (shortest)
 *  - Keep track of when we form a valid substring (formed)
 *      - We increment formed when we have a needed character (and same # of duplicates)
 *      - When formed === need.size, then we have created a valid substring. Then we record and update our values
 *  - Keep track of best left and right pointers so we can use them to return our best substring
 *    using js slice()
 * 
 */

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        // Build out map of t, this is what we need
        let need = new Map();
        for (let ch of t) {
            need.set(ch, (need.get(ch) || 0) + 1);
        }

        let have = new Map();
        let bestLength = Infinity;
        let bestLeft = 0;
        let bestRight = 0;
        let left = 0
        let formed = 0;

        // Slide window
        for (let right = 0; right < s.length; right++) {
            // Add char to our 'have' map
            let rch = s[right];
            have.set(rch, (have.get(rch) || 0) + 1);

            // After adding char to window, check if we have formed a valid substring
            if (need.has(rch) && have.get(rch) === need.get(rch)) formed++;

            // If a valid substring is completed, record and update our values, then shrink window
            while (formed === need.size) {
                // Update bestLength if substring is smaller than our current best
                if (right - left + 1 < bestLength) {
                    bestLength = right - left + 1;
                    bestLeft = left;
                    bestRight = right;
                }

                // Shrink window by moving left pointer until a valid char leaves window
                let lch = s[left];
                have.set(lch, have.get(lch) - 1);
                // If the left char that was removed was a needed char, decrement formed
                if (need.has(lch) && have.get(lch) < need.get(lch)) formed--;
                left++
            }
        }

        // Return smallest substring using bestLeft and bestRight, or "" if doesn't exist
        return bestLength === Infinity ? "" : s.slice(bestLeft, bestRight + 1); // js.slice() does not include end, so end + 1
    }
}
/**
 *  Time: O(m + n) - One pass through t of size m to build map, then slide window through s of size n where each character enters and leaves window at most once
 *  Space: O(1) - Allocate space for need and have maps which are bound by number of upper and lowercase letters (52)
 *         O(n) - If we include all characters
 * 
 */
