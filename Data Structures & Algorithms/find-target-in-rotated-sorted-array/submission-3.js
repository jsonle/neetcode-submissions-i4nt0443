/**
 *  Approach
 *  - Array is sorted and searching for target in it --> binary search O(logn)
 *  - If array is rotated < n times, array will be split into two monotonic increasing sections
 *  - Use binary search to find which section the target is in
 *  - Get mid, check if target is between left and mid
 *      - If not, target must be in right section
 *  - After we figure out which section it is in, perform standard binary search to find target
 * 
 */

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0, right = nums.length - 1;

        // Binary search
        while (left <= right) {
            // Get mid
            let mid = Math.floor((left + right) / 2);
            // If mid is target return it
            if (nums[mid] === target) return mid;

            // Check left half first, see if it is sorted
            if (nums[left] <= nums[mid]) {
                // Left half is sorted --> try to find target
                if (nums[left] <= target && target < nums[mid]) {
                    right = mid - 1;
                } else { // Target must be in right half
                    left = mid + 1;
                }
            } else {
                // Right half is sorted, try to find in right side
                if (nums[mid] < target && target <= nums[right]) {
                    left = mid + 1;
                } else { // Target must be in left half
                    right = mid - 1;
                }
            }
        }

        return -1;
    }
}

/**
 *  Time: O(logn) - binary search, each iteration cuts search space in half
 *  Space: O(1) - constant space
 * 
 */
