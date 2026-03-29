class Solution {
    /**
     *  Approach
     *  - Basic binary search
     *      - Find midpoint of nums, compare to target
     *      - If mid is > target, target must be in left half --> set right = mid
     *      - If mid is < target, target must be in right half --> set left = mid
     * 
     */

    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;

        // Binary Search
        while (left <= right) {
            let mid = Math.floor((left + right)/2);

            if (nums[mid] > target) {
                right = mid - 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                return mid;
            }
        }

        return -1;
    }
}

/**
 * Time: O(logn) - binary search, each iteration cuts n in half while searching for target
 * Space: O(1) - constant space, only declaring left and right pointers
 * 
 */
