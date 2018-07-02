// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
      this.data = data;
      this.children = [];
    }
  
    add ( data ) {
      let newNode = new Node(data)
      this.children.push(newNode);
    }
  
    remove ( data ) {
      this.children = this.children.filter( child => child.data !== data );
    }
}

class Tree {
    constructor() {
      this.root = null;
    }
  
    traverseBF(fn) {
      
      if ( !this.root ) return -1;
      let nodes = [this.root];
      
      while ( nodes.length ) {
        let node = nodes.shift();
        fn(node);
        if ( node.children.length ) {
          node.children.forEach( item => nodes.push(item));
        }
      }
    }

    traverseDF(fn, node) {
        if ( !node ) node = this.root;
        fn(node);
        if ( node.children.length > 0 ) {
          node.children.forEach( (item) => {
            return this.traverseDF(fn, item);
          });
        }
      }
  
  }

module.exports = { Tree, Node };
