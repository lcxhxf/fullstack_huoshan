import LinkedList from "./lib/linked_list";

const linkedList = new LinkedList();
linkedList.push(1);
linkedList.push(12);
linkedList.push(11);
linkedList.push(21);
linkedList.push(13);
linkedList.push(16);
linkedList.removeAt(1);
linkedList.insert(2,100);
console.log(linkedList.toString());


