class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor(capacity = 10) {
    this._head = this._tail = null;
    this._capacity = capacity;
    this._size = 0;
  }

  get capacity() {
    return this._capacity;
  }

  get size() {
    return this._size;
  }

  get head() {
    return this._head;
  }

  get tail() {
    return this._tail;
  }

  isFull() {
    return this.size === this.capacity;
  }

  isEmpty() {
    return this.capacity === 0;
  }

  // 尾部添加元素
  append(value) {
    if (this.isFull()) {
      return false;
    }

    const newNode = new Node(value);

    if (!this.tail) {
      this._head = this._tail = newNode;
    } else {
      this._tail.next = newNode;
      newNode.prev = this._tail;
      this._tail = newNode;
    }
    this._size++;
    return true;
  }

  // 首部添加元素
  preAppend(value) {
    if (this.isFull()) {
      return false;
    }

    const newNode = new Node(value);

    if (!this.head) {
      this._head = this._tail = newNode;
    } else {
      newNode.next = this.head;
      this._head.prev = newNode;
      this._head = newNode;
    }
    this._size++;
    return true;
  }

  // 在某个结点后添加元素
  insert(value, prevValue) {
    if (this.isFull()) {
      return false;
    }

    if (!this._head) {
      return false;
    }

    const newNode = new Node(value);
    let currentNode = this.head;

    while (true) {
      if (currentNode.value === prevValue) {
        newNode.next = currentNode.next;
        newNode.prev = newNode;
        currentNode.next = newNode;

        if (currentNode.next) {
          newNode.next.prev = newNode;
        } else {
          this._tail = newNode;
        }
        this._size++;
        return true;
      } else {
        if (currentNode.next) {
          currentNode = currentNode.next;
        } else {
          return false;
        }
      }
    }
  }

  // 移除任意位置元素
  remove(value) {
    if (this.isEmpty()) {
      return false;
    }

    let currentNode = this.head;

    if (this.head.value === value) {
      return this.removeHead();
    }

    if (this.tail.value === value) {
      return this.removeTail();
    }

    while (true) {
      if (currentNode.value === value) {
        if (currentNode.next) {
          currentNode.prev.next = currentNode.next;
          currentNode.next.prev = currentNode.prev;
        } else {
          currentNode.prev.next = null;
          this._tail = currentNode.prev;
          this._tail = currentNode.prev;
        }
        currentNode.next = currentNode.prev = null;
        this._size--;
        return true;
      } else {
        if (currentNode.next) {
          currentNode = currentNode.next;
        } else {
          return false;
        }
      }
    }
  }

  // 移除首元素
  removeHead() {
    if (this.isEmpty()) {
      return false;
    }

    if(!this._head.next) {
      this._head = this._tail = null;
    } else {
      this._head.next.prev = null;
      this._head = this._head.next;
    }
    this._size--;
    return true;
  }

  // 移除尾元素
  removeTail() {
    if (this.isEmpty()) {
      return false;
    }

    if (!this._tail.prev) {
      this._head = this._tail = null;
    } else {
      this._tail.prev.next = null;
      this._tail = this._tail.prev;
    }
    this._size--;
    return true;
  }


}