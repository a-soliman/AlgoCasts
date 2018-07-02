// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  
    insert(value) {
      if ( value <= this.data) {
        if ( !this.left ) {
          let newNode = new Node(value);
          this.left = newNode;
        }
        else this.left.insert(value);
      }
      else {
        if ( !this.right ) {
          let newNode = new Node(value);
          this.right = newNode;
        }
        else this.right.insert(value);
      }
    }
  
    contains( value ) {
      if ( value == this.data ) return this;
      if ( value < this.data ) {
        if ( this.left ) return this.left.contains(value);
        else return null;
      }
      else if ( value > this.data ) {
        if ( this.right ) return this.right.contains(value);
        else return null;
      }
    }
  }

module.exports = Node;
