export enum books {
  CLASICOS = 1,
  BARNICES_Y_LACAS = 2,
  VANGUARDIA = 3,
  FERROMICACEO = 4,
  TERSPLAST = 5,
  PISCINAS = 6,
  INDULAC = 7,
  PROPIOS = 8,
}

export const booksByUserType = {
  Administrador: [
    books.CLASICOS,
    books.BARNICES_Y_LACAS,
    books.VANGUARDIA,
    books.FERROMICACEO,
    books.TERSPLAST,
    books.PISCINAS,
    books.INDULAC,
  ],
  Colorin: [books.CLASICOS, books.VANGUARDIA],
  Tersuave: [books.BARNICES_Y_LACAS, books.PISCINAS],
  Industria: [books.FERROMICACEO, books.TERSPLAST, books.INDULAC],
};
