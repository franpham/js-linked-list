/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  var head = null;
  var tail = null;
  var length = 0;
  var current = null;

  function createNode(val) {
    return {
      value : val,
      next : null
    };
  }

  function _getHead() {
    return head;
  }

  function _getTail() {
    return tail;
  }

  function _get(num) {
    var node = head;
    if (num >= length) {
      return false;
    }
    for (var i = 0; i < num; i++) {
      node = node.next;
    }
    return node;
  }

  function _add(val) {
    var node = createNode(val);
    if (head === null) {  // no nodes exist;
      head = tail = node;
    } else {
      tail.next = node;   // link new node;
      tail = node;        // update tail;
    }
    length++;
    return node;
  }

  function _remove(num) {
    if (num >= length) {
      return false;
    }
    else if (num === 0 && length === 1) {
      head = null;
      tail = null;
    } else {
      var node = _get(num);
      var prev = _get(num - 1);
      if (num === 0) {
        head = head.next;
      }
      if (num === length - 1) {
        tail = prev;           // set new tail;
        prev.next = null;      // relink tail;
      } else {
        prev.next = node.next;    // relink nodes;
      }
    }
    length--;
  }

  function _insert(val, num) {
    if (num === 0) {   // insert at head;
      var node = createNode(val);
      node.next = head;
      head = node;          // set new head;
      if (length === 0) {
        tail = node;
      }
    }
    else if (num > length - 1 || num < 0) {
      return false;
    }
    else {
      var node = createNode(val);
      var prev = _get(num - 1);
      var next = _get(num);

      prev.next = node;       // insert new node;
      node.next = next;       // relink nodes; tail is the same for length - 1;
    }
    length++;
  }

  function _reset() {
    current = head;
  }

  function _hasNext() {
    return current != null && (current.next !== null || current === tail);
  }

  function _next() {
    var temp = current;
    current = current.next;
    return temp.value;
  }

  return {
    getHead : _getHead,
    getTail : _getTail,
    get : _get,
    add : _add,
    remove : _remove,
    insert : _insert,
    hasNext : _hasNext,
    next : _next,
    reset : _reset
  };
}

/*
var ll = linkedListGenerator();
ll.add('ant');
ll.add('bat');
ll.add('cat');
ll.add('dog');
ll.add('elephant');
ll.add('fish');
ll.add('giraffe');
ll.add('hippo');

while (ll.hasNext()) {
  console.log('ll.next() = ', ll.next());
}
*/