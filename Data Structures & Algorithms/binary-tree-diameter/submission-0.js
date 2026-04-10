/**
 *  Approach
 *  - Natural dfs problem since we we're trying to find the longest path in the tree between two nodes
 *  - We want to count each edge in the tree
 *      - Edge being the line between two nodes
 *  - We will need global variable maxDiameter to update while recursively searching for longest path
 *  - DFS/Recursion helper function:
 *      - Base case: Empty node --> Return 0
 *      - Recursively search left and right nodes to find max length
 *      - After each search, update diameter
 *      - We only care about the longest path, so return the max of either left or right
 *      - Include + 1 in the return to count the edge to parent node
 *  - Return max diameter
 * 
 */

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let maxDiameter = 0;

        // dfs helper
        function longestPath(node) {
            // Base case
            if (!node) return 0;

            // Recursively search left and right for max length
            let left = longestPath(node.left);
            let right = longestPath(node.right);

            // Update max diameter 
            maxDiameter = Math.max(maxDiameter, left + right);

            // Return max of either left or right + 1
            return Math.max(left, right) + 1;
        }

        // Call helper
        longestPath(root);

        return maxDiameter;
    }
}

/**
 *  Time: O(n) - Each node visited once in tree
 *  Space: O(h) - Worst case skewed tree, h = n (number of nodes), best case balanced tree O(logn)
 * 
 */
