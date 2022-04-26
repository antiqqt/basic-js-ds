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
    if (currentNode.value === valueToRemove) {
      // Then there're two outcomes
      if (!prevNode) {
        // If we're in the head of our list,
        // move head forward
        headOfList = headOfList.next;
        currentNode = currentNode.next;
      } else {
        // If we're anywhere else,
        // link previous and next elements 
        // from current
        prevNode.next = currentNode.next;
        currentNode = currentNode.next;
      }
      continue;
    }

    // If value is not that we're looking for,
    // continue moving forward
    prevNode = currentNode;
    currentNode = currentNode.next;
  }

  return headOfList;
}

module.exports = {
  removeKFromList,
};
