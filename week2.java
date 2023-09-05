
public class ListNode {
    int val;
    ListNode next;
    ListNode(int x) {
        val = x;
        next = null;
    }
}

public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        Set<ListNode> set = new HashSet<>();

        while(headA !=  null){
            set.add(headA);
            headA = headA.next;
        }

        while(headB !=  null){
            if(set.contains(headB)){
                return headB;
            }
            headB = headB.next;
        }
        return null;
    }

    public ListNode getLoopNode(ListNode head) {
        ListNode fast = head;

        while(fast != null && fast.next != null){
            head = head.next;
            fast = fast.next.next;
            
            if(head == fast){
                return head;
            }
        }
        return null;
    }
}