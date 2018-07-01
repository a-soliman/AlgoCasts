// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    let value = this.data[this.data.length-1];
    if ( value ) return value;
    return;
  }

  values() {
    return this.data;
  }
}

module.exports = Queue;
