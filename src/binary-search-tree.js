const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.source = null;
  }

  root() {
    return this.source;
  }

  add(data) {
    this.source = addNode(this.source, data);

    function addNode(node, data) {
      // If no root make new node in root
      if (!node) {
        return new Node(data);
      }

      // If data exists in tree return corresponding node as is
      if (node.data === data) {
        return node;
      }

      // If data in root doesn't match the value we need,
      // try to add our data in left or right side of tree respectively
      if (data < node.data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return searchWithin(this.source, data);

    function searchWithin(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        return searchWithin(node.left, data);
      } else {
        return searchWithin(node.right, data);
      }
    }
  }

  find(data) {
    return findNode(this.source, data);

    
    function findNode(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        return findNode(node.left, data);
      } else {
        return findNode(node.right, data);
      }
    }
  }

  remove(data) {
    this.source = removeNode(this.source, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      }

      if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      }

      // If data === node.data
      if (!node.left && !node.right) {
        return null;
      }

      if (!node.left) {
        return node.right;
      }

      if (!node.right) {
        return node.left;
      }

      // If both children exist
      let minFromRight = node.right;

      // Traverse in the left end of right node
      while (minFromRight.left) {
        minFromRight = minFromRight.left
      }
      // Copy the smallest value from right branch 
      // to root(initial) node,
      // effectively replacing it
      node.data = minFromRight.data;

      // remove node with value we copied before
      node.right = removeNode(node.right, minFromRight.data);

      return node;
    }
  }

  min() {
    if (!this.source) {
      return;
    }

    // Find the most left(smallest) element
    let cursor = this.source;
    while (cursor.left) {
      cursor = cursor.left;
    }

    return cursor.data;
  }

  max() {
    if (!this.source) {
      return;
    }

    // Find the most right(biggest) element
    let cursor = this.source;
    while (cursor.right) {
      cursor = cursor.right;
    }

    return cursor.data;
  }
}

module.exports = {
  BinarySearchTree
};