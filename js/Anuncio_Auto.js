import { Anuncio } from "./Anuncio";

class AnuncioAuto extends Anuncio {
  constructor(
    id,
    titulo,
    descripcion,
    transaccion,
    precio,
    num_puertas,
    num_kms,
    potencia
  ) {
    super(id, titulo, descripcion, transaccion, precio);
    this.num_puertas = num_puertas;
    this.num_kms = num_kms;
    this.potencia = potencia;
  }
}
