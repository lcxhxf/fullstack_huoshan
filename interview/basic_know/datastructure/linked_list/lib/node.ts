// 指针特别灵活
// 两部分内容
export default class Node<T> {
    element: any;
    next: any;
    constructor(element: T, next?: any) {
        this.element = element
        this.next = next
    }
}
