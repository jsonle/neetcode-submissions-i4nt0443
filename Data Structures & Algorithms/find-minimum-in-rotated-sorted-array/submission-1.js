/**
 *  Approach
 *  - O(logn) solution we can use is binary search since array is sorted
 *  - Binary search starting left pointer at 0, right pointer at n - 1
 *  - If left pointer is ever < right pointer, then left pointer is minimum
 *      - ex. [1,2,3,4,5,6] (rotated 0 or n times) --> 1 < 6 --> 1 = minimum
 *      - If array is rotated less than n times, initial left pointer will never be less than right
 *      - Goal is to binary search until left < right --> left is our minimum
 *  - Standard binary search, get mid point:
 *      - First, if left < right --- > return left
 *      - If mid > right, --> minimum must be right side --> set left = mid
 *      - Otherwise, must be left side --> set right = mid - 1
 * 
 */

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0;
        let right = nums.length - 1;

        //Binary Search
        while (left < right) {
            if (nums[left] < nums[right]) return nums[left];

            // Get mid point
            let mid = Math.floor((left + right) / 2);

            // Find which half minimum is in
            if (nums[mid] > nums[right]) {
                left = mid + 1;
            } else {
                right = mid;
            };
        };
        return nums[left];
    }
}

/**
 * Time: O(logn) - Binary search, each iteration cuts search space in half
 * Space: O(1) - constant space 
 * 
 */
