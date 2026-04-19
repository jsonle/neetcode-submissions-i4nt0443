/**
 *  Approach
 *  - Classic BFS problem, use BFS with a queue
 *  - Initialize a queue with the root node in it
 *  - JS shift() can be slow since it re-indexes the array. Instead we'll use head pointer
 *  to simulate removing the front node in the queue
 *  - While head index < queue.length (head index reaching the end means we've searched all levels)
 *      - Initialize new level array which holds nodes on the current level
 *      - Get the size/length of the current level: queue.length - head index
 *      - Iterate through the queue size times
 *          - Push node at index head from queue into level array
 *          - Move head index forward
 *          - Push left and right children into the queue
 *      - After finishing a level --> push level into result array
 *  - Return result
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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) return [];

        let result = [];
        let queue = [root];
        let head = 0; // head index to simulate queue system without using shift()
        // BFS
        while (head < queue.length) {
            let level = [];
            let size = queue.length - head;

            // push size nodes into the level array
            for (let i = 0; i < size; i++) {
                let node = queue[head++];
                level.push(node.val);

                // Push children into queue
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }

            // Push current level into result
            result.push(level);
        }

        return result;
    }
}


/**
 *  Time: O(n) - each node enters and leaves the queue atleast once
 *  Space: O(w) - Where w is maximum width of the tree. In a balanced tree, queue will hold the bottom
 *  level of the tree (n/2) which scales proportionaly with n
 *          O(1) for a skewed tree
 * 
 */
