const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  const valueToRemove = k;
  let headOfList = l;
  let currentNode = headOfList;
  let prevNode = null;

  while (currentNode) {
    const valueIsFound = currentNode.value === valueToRemove;

    if (valueIsFound && !prevNode) {
      // If we're in the head of our list,
      // move head forward
      headOfList = headOfList.next;
    }

    if (valueIsFound && prevNode) {
      // If we're anywhere else, link elements
      // which are previous and next to current
      prevNode.next = currentNode.next;
    }

    if (!valueIsFound) {
      // Keep reference to the previous node
      prevNode = currentNode;
    }

    // Continue moving forward
    currentNode = currentNode.next;
  }

  return headOfList;
}

module.exports = {
  removeKFromList,
};
