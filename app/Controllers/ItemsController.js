import ItemsService from "../Services/ItemsService.js";
import STORE from "../store.js";


function _drawItem(){
const array = STORE.State.items
let injected = ""
document.getElementById("machine").innerText = `Current Balance: $${STORE.State.balance}`
for (let i = 0; i < array.length; i++) {
  const item = array[i];
  injected += item.Template
}
document.getElementById("items").innerHTML = injected
}




//Public
export default class Controller {
  constructor() {
    console.log("creating new controller", ItemsService);
   _drawItem()
  }
  drawPage(){
    _drawItem()
  }
  buy(item){
    ItemsService.buy(item)
    _drawItem()
  }
  moneyIn(){
    ItemsService.moneyIn()
    console.log(STORE.State.balance)
    _drawItem()
  }
}
