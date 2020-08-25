import Item from "./Models/Item.js";
import Machine from "./Models/Machine.js";

let _state = {
  activeValue: new Item({ title: "Value" }),
  /** @type {Item[]} */
  items: [new Item("soda", 2, 5), new Item("chips", 1, 3)],
  machine: new Machine()
};

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;
