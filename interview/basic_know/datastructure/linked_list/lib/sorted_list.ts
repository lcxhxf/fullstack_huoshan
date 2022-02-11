import LinkedList from "./linked_list";
import { defaultEquals } from "./util";

export default class OrderedList<T> extends LinkedList<T> {
    constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
        super(equalsFn)
    }
}