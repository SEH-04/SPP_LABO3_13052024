class Anuncio {
  constructor(id, titulo, descripcion, transaccion, precio) {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.transaccion = transaccion;
    this.precio = +precio;
  }

  verify() {
    return this.checkTitulo();
  }

  checkTitulo() {
    return { success: true, rta: null };
  }
}

export { Anuncio };
