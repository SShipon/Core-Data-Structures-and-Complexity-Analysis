class Inventory {
    constructor() {
      this.items = {};
    }
  
    addItem(name, quantity) {
      if (this.items[name]) {
        this.items[name] += quantity;
      } else {
        this.items[name] = quantity;
      }
    }
  
    removeItem(name, quantity) {
      if (this.items[name]) {
        this.items[name] -= quantity;
        if (this.items[name] <= 0) {
          delete this.items[name];
        }
      }
    }
  
    checkStock(name) {
      return this.items[name] || 0;
    }
  
    displayInventory() {
      console.log(this.items);
    }
  }
  
  // Example:
  const inventory = new Inventory();
  inventory.addItem('apple', 10);
  inventory.addItem('banana', 5);
  inventory.removeItem('apple', 2);
  console.log(inventory.checkStock('apple'));
  inventory.displayInventory();