import ItemsService from "../Services/ItemsService.js";
import STORE from "../store.js";

function _drawMachine(){
  document.getElementById("machine").innerHTML = STORE.State.machine.Template
}





//Public
export default class ItemsController {
  constructor() {
    console.log("creating new controller", ItemsService);
  }
}
