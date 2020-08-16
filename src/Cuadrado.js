import Poligono from './Poligono'

class Cuadrado extends Poligono {
  constructor() {
    super()
    this.id = 2
    this.nombre = 'Cuadrado'
  }
  perimetro(base, altura) {
    return (2 * this.base) + (2 * this.altura)
  }
  area() {
    return this.base * this.altura
  }
}

export default Cuadrado
