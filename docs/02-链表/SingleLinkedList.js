class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SingleLinkedList {
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
      newNode.prev = this.tail;
      this._tail = newNode;
    }
    this._size++;
    return true;
  }

  // 在 prevValue 后插入元素
  insert(value, prevValue) {
    if (this.isFull()) {
      return false;
    }

    if (!this.head) {
      return false;
    }

    const newNode = new Node(value);
    let currentNode = this.head;
    while (true) {
      if (currentNode.value === prevValue) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;

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

  // 删除首元素
  removeHead() {
    if (this.isEmpty()) {
      return false;
    }

    const currentNode = this.head;

    if (!this.head.next) {
      this._head = null;
      this._tail = null;
    } else {
      this._head = this._head.next;
      currentNode.next = null;
    }
    this._size--;
    return true;
  }

  // 删除尾元素
  removeTail() {
    if (this.isEmpty()) {
      return false;
    }

    let currentNode = this.head;

    while (currentNode.next) {
      if (currentNode.next.value === this.tail.value) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }
    this._size--;
    return true;
  }

  // 删除任意元素
  remove(value) {
    if (this.isEmpty()) {
      return false;
    }

    if (this.head.value === value) {
      return this.removeHead();
    }

    if (this.tail.value === value) {
      return this.removeTail();
    }

    let currentNode = this.head;

    while (true) {
      if (currentNode.value === value) {
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
}