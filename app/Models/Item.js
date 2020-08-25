export default class Item {
  constructor(name, price, stock) {
   this.name = name
   this.price = price
   this.stock = stock
  
  }

  get Template() {
    if(this.stock){
      return `
      <button type="button" class="btn btn-primary">${this.name} ${this.price} </button>`
    }
    else{
      return `
      <button type="button" class="btn btn-primary disabled">${this.name} ${this.price} </button>`
    }
  }
}