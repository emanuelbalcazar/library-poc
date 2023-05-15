class Number {
  constructor(number) {
    this.number = number;
  }

  positive() {
    if (this.number > 0) {
      console.log("El numero es positivo");
    } else {
      console.log("El numero es negativo");
    }
  }
}
module.exports = Number;
