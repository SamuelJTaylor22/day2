import Controller from "./Controllers/ItemsController.js";

class App {
  itemsController = new Controller();
}

window["app"] = new App();
