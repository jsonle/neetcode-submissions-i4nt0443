/**
 *  Approach
 *  - Use BFS since we need to process nodes level by level
 *  - BFS using a queue
 *      - Use array to act as queue in js
 *      - Since javascripts shift() can be slow (due to reindexing array every time), use
 *        a head index pointer to simulate bfs queue system
 *  - Initialize result array, queue (with root to start), head index 
 *  - BFS:
 *      - Get the size (# of nodes) of current level with queue.length - headIndex
 *      - Iterate size times, when we get to the last node (right side node), add it to result array
 *      - Add node's children (if they exist) to queue
 *  - return result
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
     * @return {number[]}
     */
    rightSideView(root) {
        // First handle edge case of empty tree
        if (!root) return [];

        let queue = [root];
        let headIndex = 0;
        let result = [];

        // BFS
        while (headIndex < queue.length) {
            // Get size of the current level
            let size = queue.length - headIndex;

            for (let i = 0; i < size; i++) {
                let node = queue[headIndex++];
                // If right-most node, add to result
                if (i === size - 1) result.push(node.val);

                // Add children to queue
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
        }

        return result;
    }
}

/**
 *  Time: O(n) - Each node enters and leaves queue once
 *  Space: O(w) - where w is max width of tree, worst case perfectly balanced tree
 *                where w = length of bottom level of tree (~n/2)
 *                  ---> scales proportionaly with n ---> n
 *         O(1) for skewed tree
 * 
 */
