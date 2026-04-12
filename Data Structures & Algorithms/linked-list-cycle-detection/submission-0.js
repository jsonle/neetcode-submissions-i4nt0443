/**
 * Approach
 *  - To determine if there is a cycle without being given the index of the beginning of the cycle,
 *    we use use fast and slow pointers that traverse linked list at the same time
 *  - Fast pointer moves two times, slow pointer moves one time
 *  - Idea is that when fast === slow, that means there is a cycle
 *  - Traverse linked list until fast === null (no cycle)
 * 
 */

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let slow = head;
        let fast = head;

        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;

            if (fast === slow) return true;
        }

        return false;
    }
}

/**
 *  Time: O(n) - Use two pointers to traverse linked list, where even if there is a cycle, fast pointer will eventually
 *               catch up to slow and meet, and cycle will be <= n nodes
 *  Space: O(1) - constant space
 * 
 */
