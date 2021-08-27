/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
    let p = head;
    let q = head;
    let sum = 0;
    while (p != null) {
        p = p.next;
        sum++;
    }
    for (let i = 0; i < sum - k; i++) {
        q = q.next;
    }
    return q;
};