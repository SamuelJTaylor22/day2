import Item from "../Models/Item.js";
import STORE from "../store.js";

//Public
class ItemsService {
  constructor(){
    console.log("Creating Item Service", STORE.State.items);
  }
}

const SERVICE = new ItemsService();
export default SERVICE;
