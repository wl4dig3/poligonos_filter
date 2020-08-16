import Poligono from './Poligono'

class Decagono extends Poligono {
  constructor() {
    super()
    this.id = 5
    this.nombre = 'Decagono'
  }
  perimetro() {
    return  this.lado * 10
  }
  area() {
    return (this.lado * this.altura) / 2
  }
}

export default Decagono

