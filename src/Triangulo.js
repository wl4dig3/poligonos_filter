import Poligono from './Poligono'

class Triangulo extends Poligono {
  constructor() {
    super()
    this.id = 3
    this.nombre = 'Triangulo'
  }
  perimetro(lado) {
    return this.lado * 3
  }
  area(base, altura) {
    return (this.base * this.altura) / 2
  }
}

export default Triangulo
