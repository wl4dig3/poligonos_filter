import Circulo from './Circulo'
import Cuadrado from './Cuadrado'
import Decagono from './Decagono'
import Triangulo from './Triangulo'
import Octagono from './Octagono'

document.getElementsByTagName('select')[0].addEventListener('change', function (e) {
  let Poligono = e.target.value
  // instancias 
  let circulo = new Circulo()
  let cuadrado = new Cuadrado()
  let decagono = new Decagono() 
  let triangulo = new Triangulo()
  let octagono = new Octagono()

  // arreglos 
  let poligonos = [circulo, cuadrado, decagono, triangulo, octagono]
  // aplicando iterador
  let poligono = poligonos.filter((x) => x.id == Poligono)

  if (poligono) {
    console.log(`Perimetro del ${poligono[0].nombre} ===> ${poligono[0].perimetro()}`)
    console.log(`Area del ${poligono[0].nombre} ===> ${poligono[0].area()}`)
  } else {
    console.log('No se encuentra ese poligono')
  }
  // poligonos.forEach((poligono) => {
  //   if (Poligono == poligono.id) {
  //     console.log(`Perimetro del ${poligono.nombre} ===> ${poligono.perimetro()}`)
  //     console.log(`Area del ${poligono.nombre} ===> ${poligono.area()}`)
  //   }
  // })
})
