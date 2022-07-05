enum GENERO {
  ACAO = "ação",
  DRAMA = "drama",
  COMEDIA = "comédia",
  ROMANCE = "romance",
  TERROR = "terror",
}

type Filme = {
  titulo: string;
  anoLancamento: number;
  genero: GENERO;
  notaImdb?: number;
};

function catalogaFilmes(
  tituloFilme: string,
  ano: number,
  generoFilme: GENERO,
  nota?: number
): Filme {
  if (nota) {
    const filmeComNota: Filme = {
      titulo: tituloFilme,
      anoLancamento: ano,
      genero: generoFilme,
      notaImdb: nota,
    };
    return filmeComNota;
  } else {
    const filmeSemNota: Filme = {
      titulo: tituloFilme,
      anoLancamento: ano,
      genero: generoFilme,
    };
    return filmeSemNota;
  }
}

console.log(catalogaFilmes("Duna", 2021, GENERO.ACAO, 8));
console.log(catalogaFilmes("Duna", 2021, GENERO.ACAO))
