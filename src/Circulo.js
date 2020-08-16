import Poligono from './Poligono'

class Circulo extends Poligono {
  constructor() {
    super()
    this.id = 1
    this.nombre = 'Circulo'
  }
  perimetro() {
    return Math.PI * 2 * this.radio
  }
  area() {
    return Math.pow(this.radio, 2) * Math.PI
  }
}

export default Circulo
