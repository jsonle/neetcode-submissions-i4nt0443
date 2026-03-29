/**
 *  Approach
 *  - Use a dummy head node to start building the merged linked list
 *  - Use tail variable to keep track of current node in new merged list
 *  - Iterate until either list1 or list2 is done merging
 *      - Compare list1 and list2 nodes
 *          - If list1 is <= list2, set tail.next = list1, otherwise = list2
 *              - Move list1 forward, otherwise list2
 *  - After one list is done, append the other list to end of merged list
 *  - return dummy.next (head of new list)
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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let dummy = new ListNode(0);
        let tail = dummy;
        // Iterate until one of the lists are done merging
        while (list1 && list2) {
            if (list1.val <= list2.val) {
                tail.next = list1;
                list1 = list1.next;
            } else {
                tail.next = list2;
                list2 = list2.next;
            }
            tail = tail.next // Move tail forward
        }

        // Once one list is done, if the other list still has nodes to merge, append it
        tail.next = list1 || list2;

        return dummy.next; // head node is dummy.next
    }
}

/**
 * Time: O(n + m) - Each node from each list visited at most once O(n+m)
 * Space: O(1) - constant space, we just use dummy and tail pointers
 */
