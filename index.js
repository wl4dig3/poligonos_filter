class Dueño {
  constructor(nombre, direccion, telefono) {
    this.nombreDueno = nombre
    this.direccion = direccion
    this.telefono = telefono
  }
}

class Animal extends Dueño {
  constructor(nombre, tipo) {
    super(nombreDueno, direccion, telefono)
    this.nombre = nombre
    this.tipo = tipo
  }
}

class Perro extends Animal {
  constructor(enfermedad) {
    super(nombre, tipo, nombreDueno, direccion, telefono)
    this.enfermedad = enfermedad
  }
}
