class Storage {
  #items;

  constructor(items){
    this.#items = items;
  }

  getItems(){
    return this.#items;
  }

  addItem(newItem){
    this.#items.push(newItem);
  }

  // removeItem(itemToRemove) {
  //   const index = this.#items.indexOf(itemToRemove);
  //   if (index !== -1) {
  //     this.#items.splice(index, 1);
  //   }
  // }
  removeItem(itemToRemove) {
    for (let i = 0; i < this.#items.length; i++) {
      if (this.#items[i] === itemToRemove) {
        this.#items.splice(i, 1); 
        break;
      }
    }
  }
    
  
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
