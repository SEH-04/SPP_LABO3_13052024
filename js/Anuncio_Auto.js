import { Anuncio } from "./Anuncio.js";

export default class AnuncioAuto extends Anuncio {
  constructor(
    id,
    titulo,
    descripcion,
    transaccion,
    precio,
    puertas,
    kms,
    potencia
  ) {
    super(id, titulo, descripcion, transaccion, precio);
    this.puertas = +puertas;
    this.kms = +kms;
    this.potencia = +potencia;
  }
}
