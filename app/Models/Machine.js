export default class Machine {
  constructor() {
    this.money = 0
  
  }

  get Template() {
    return `<h2>Current Balance: ${this.money}</h2>`
  }
}