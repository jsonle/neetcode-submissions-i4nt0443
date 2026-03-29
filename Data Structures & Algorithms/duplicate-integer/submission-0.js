class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // Use hash to keep track of number of times that value has been seen
        let numHash = {};

        // Iterate through nums array
        for (let i = 0; i < nums.length; i++) {
            //  Add to hash if it doesn't exist
            if (numHash[nums[i]] === undefined) {
                numHash[nums[i]] = 1;
            } else { // If value exists in hash -> there is a duplicate -> return true
                return true;
            }
        }

        // Return false if loop finishes with no duplicates
        return false;
    }

    /**
     * Time Complexity: O(n) - Worst case we iterate through the whole nums array
     * Space Complexity: O(n) - Worst case our hash is size of input array
     */
}
