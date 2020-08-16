import Poligono from './Poligono'

class Octagono extends Poligono {
  constructor() {
    super()
    this.id = 4
    this.nombre = 'Octagono'
  }
  perimetro() {
    return  this.lado * 8
  }
  area(lado, apotema) {
    return (this.lado * 8) * (this.apotema) / 2
  }
}

export default Octagono
