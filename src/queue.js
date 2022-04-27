const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
  }

  getUnderlyingList() {
    if (this.head) return this.head;

    return 'There are no elements in queue';
  }

  enqueue(value) {
    const newNode = new ListNode(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let cursor = this.head;
    while (cursor.next) {
      cursor = cursor.next;
    }
    cursor.next = newNode;
  }

  dequeue() {
    if (this.head) {
      const dequeuedValue = this.head.value;
      this.head = this.head.next;
      return dequeuedValue;
    }
    
    return 'There are no elements in queue';
  }
}

module.exports = {
  Queue,
};
