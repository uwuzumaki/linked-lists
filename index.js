//node index.js

const LinkedList = () => {
  let headNode = null;
  let listLength = 0;

  //Appends a new node to the very end of the linked list.
  //First checks if the linked list is null. If it is, will just make the current node as the head.
  //If the head is not null, it will check to see if it is null. If not null, set current index to next node and check again.
  //If next node is null, it will change the next node value of the current node to the newNode (which has a null value for it's nextNode).
  const append = (value) => {
    const newNode = Node(value, null);
    let current = headNode;

    if (!headNode) return (headNode = newNode);

    while (current.nextNode) {
      current = current.nextNode;
    }
    listLength++;
    return (current.nextNode = newNode);
  };

  //Prepends a node to the very front of the list.
  //Creates a node with the provided value and the previous head as the reference and sets the newNode as the head.
  const prepend = (value) => {
    const newNode = Node(value, headNode);
    listLength++;
    return (headNode = newNode);
  };

  const size = () => {
    return listLength;
  };

  const head = () => {
    return headNode;
  };

  //Returns the last node in the linked list
  const tail = () => {
    let current = headNode;

    while (current.nextNode) {
      current = current.nextNode;
    }
    return current;
  };

  //Returns the node at the specified index
  const at = (index) => {
    let current = headNode;
    for (let i = 0; i <= index; i++) {
      if (i == index) {
        return current;
      }
      current = current.nextNode;
    }
  };

  //Removes the last node from the linked list
  const pop = () => {
    let current = headNode;

    while (current.nextNode.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = null;
  };

  //Checks if the value provided is in the linked list
  const contains = (value) => {
    let current = headNode;
    while (current.nextNode) {
      if (current.value == value) return true;
      current = current.nextNode;
    }
    return value === tail().value ? true : false;
  };

  //Finds if a specific value is in the linked list. If it doesn't exist, returns null.
  const find = (value) => {
    let current = headNode;
    let index = 0;
    while (current.nextNode) {
      if (current.value != value) index++;
      else return index;
      current = current.nextNode;
    }
    return value === tail().value ? size() - 1 : null;
  };

  //Lists all the values inside the linked list as a string.
  const toString = () => {
    let string = "";
    let current = headNode;

    while (current) {
      string += ` ( ${current.value} ) -> `;
      current = current.nextNode;
    }
    return string;
  };

  //Inserts a new node with the provided value at provided index.
  //First the position prior to the index is found. Then the newNode is created with the provided value and the nextNode is the current node at the index.
  //Then the nextNode of the previous index node is set to the newNode that is created. The size of the list is increased by 1.
  const insertAt = (value, index) => {
    let current = headNode;
    for (let i = 0; i < index; i++) {
      if (index - 1 == i) {
        const newNode = Node(value, current.nextNode);
        listLength++;
        return (current.nextNode = newNode);
      }
      current = current.nextNode;
    }
  };

  //Removes the node at the given index.
  //First the position prior to the index is found. Then the node at the previous index has the nextNode change to the node after the index.
  const removeAt = (index) => {
    let current = headNode;
    for (let i = 0; i < index; i++) {
      if (index - 1 == i) {
        current.nextNode = current.nextNode.nextNode;
        listLength--;
        return null;
      }
      current = current.nextNode;
    }
  };

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
    printData,
  };
};

const Node = (data, next) => {
  return {
    value: data || null,
    nextNode: next || null,
  };
};

const ll = LinkedList();
ll.prepend(100);
ll.prepend(200);
ll.prepend(300);
ll.prepend(400);
ll.prepend(500);
ll.prepend(600);
ll.append("a");
// ll.printData();
// console.log(ll.size());
// console.log(ll.head());
// console.log(ll.tail());
// console.log(ll.at(3));
// ll.pop();
// ll.printData();
// console.log(ll.contains("b"));
// console.log(ll.find(600));
// console.log(ll.toString());
// // ll.insertAt("a", 3);
// console.log(ll.toString());
// ll.removeAt(3);
console.log(ll.toString());
