import Item from "../Models/Item.js";
import STORE from "../store.js";

//Public
class ItemsService {
  moneyIn() {
    STORE.State.balance++
  }
  buy(item) {
    let itemFound = STORE.State.items.find(f => f.name == item)
    if(STORE.State.balance >= itemFound.price){
    itemFound.stock--
    STORE.State.balance -= itemFound.price
    console.log(itemFound.stock)
    }
    else{
      console.log("not enough money")
    }
  }
  constructor(){
    console.log("Creating Item Service", STORE.State.items);
  }
}

const SERVICE = new ItemsService();
export default SERVICE;
