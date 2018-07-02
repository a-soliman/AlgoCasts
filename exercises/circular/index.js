// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(ll) {
    if ( !ll.head || !ll.head.next || !ll.head.next.next ) return false;
  
    let slow = ll.head;
    let fast = ll.head;
  
    while ( fast.next && fast.next.next ) {
      fast = fast.next.next;
      slow = slow.next;
      if ( fast == slow ) return true;
    }
    return false;
  }

module.exports = circular;
