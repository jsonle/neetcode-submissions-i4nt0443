
/**
 *  Approach
 *  - Reverse the linked list by setting the .next of current node to the previous node
 *  - As we iterate, will need to keep track of previous, current, and next nodes
 *  - Initialize prev = null (reversing head.next = null)
 *  - Starting at head:
 *      - store next = curr.next
 *      - reverse by setting curr = prev
 *      - move prev forward by setting it = curr
 *      - move curr forward by setting it = next
 *      - Iterate until curr is null (reached the end)
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
     * @return {ListNode}
     */
    reverseList(head) {
        let curr = head;
        let prev = null;

        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return prev; // At the end, prev is the new head
    }
}

/**
 *  Time: O(n) - Each node visited once
 *  Space: O(1) - constant space
 * 
 */
