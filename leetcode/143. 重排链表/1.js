var reorderList = function(head) {
    if(!head) return null;
    let tampHead = head;
    let arr = [];
    while(tampHead) {
        arr.push(tampHead);
        tampHead = tampHead.next;
    }
    let left = 1;
    let right = arr.length - 1;
    while(left <= right) {
        head.next = arr[right];
        right--;
        head = head.next;
        head.next = arr[left];
        left++;
        head = head.next;
    }
    head.next = null;
}