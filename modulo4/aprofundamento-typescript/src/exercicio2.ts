type Pessoa = {
  nome: string;
  idade: number;
  corFavorita: RAINBOW_COLORS;
};

enum RAINBOW_COLORS {
  YELLOW = "Amarelo",
  INDIGO = "Anil",
  BLUE = "Azul",
  ORANGE = "Laranja",
  GREEN = "verde",
  RED = "Vermelho",
  VIOLET = "Violeta",
}

const marcio = {
  nome: "Márcio",
  idade: 43,
  corFavorita: RAINBOW_COLORS.BLUE,
};

console.log(marcio);
