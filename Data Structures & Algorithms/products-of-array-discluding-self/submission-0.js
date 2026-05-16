/**
 * Approach
 *  - Brute force would be at each integer, iterate again and multiply every element to get the product (O(n^2))
 *  - Instead, we can solve using prefix & suffix sums O(n)
 *  - Create an output array where each element is initialized with 1 (since we're multiplying)
 *  - First do a pass from the front of nums (prefix) where we keep track of product of every element up until i
 *      - Multiply output[i] by the prefix at i
 *  - Second, do a pass from end of nums (suffix), keep track of product of each element up until i
 *      - Multiply output[i] by suffix at i
 * 
 */

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let output = new Array(nums.length).fill(1);

        // Prefix pass
        let prefix = 1;
        for (let i = 0; i < nums.length; i++) {
            output[i] *= prefix;
            prefix *= nums[i];
        }

        // Suffix pass
        let suffix = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            output[i] *= suffix;
            suffix *= nums[i];
        }

        return output;
    }
}

/**
 *  Time: O(n) - One pass through nums for prefix, one for suffix --> O(n) + O(n) --> O(n)
 *  Space: O(n) - Output array with length of nums (n)
 * 
 */
