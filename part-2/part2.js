
// custom data structures Time aware linked list 

class Node {
    constructor(value, timestamp) {
      this.value = value;
      this.timestamp = timestamp;
      this.next = null;
    }
  }
  
  class TimeAwareLinkedList {
    constructor() {
      this.head = null;
    }
  
    insert(value) {
      const timestamp = new Date();
      const newNode = new Node(value, timestamp);
      newNode.next = this.head;
      this.head = newNode;
    }
  
    display() {
      let current = this.head;
      while (current) {
        console.log(`Value: ${current.value}, Time: ${current.timestamp}`);
        current = current.next;
      }
    }
  }
  
 
  const list = new TimeAwareLinkedList();
  list.insert(10);
  list.insert(20);
  list.display();




  // secure hash table 
  class SecureHashTable {
    constructor(size = 50) {
      this.table = new Array(size);
    }
  
    hash(key) {
      let total = 0;
      for (let char of key) {
        total += char.charCodeAt(0);
      }
      return total % this.table.length;
    }
  
    set(key, value) {
      const idx = this.hash(key);
      if (!this.table[idx]) {
        this.table[idx] = [];
      }
      this.table[idx].push({ key, value });
    }
  
    get(key) {
      const idx = this.hash(key);
      const bucket = this.table[idx];
      if (bucket) {
        for (let obj of bucket) {
          if (obj.key === key) {
            return obj.value;
          }
        }
      }
      return undefined;
    }
  }
  
  // Example:
  const myHash = new SecureHashTable();
  myHash.set('username', 'shipon');
  console.log(myHash.get('username'));

  


  