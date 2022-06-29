type Estatisticas = {
  maior: number;
  menor: number;
  media: number;
};

function obterEstatisticas(numeros: number[]): Estatisticas {
  const numerosOrdenados = numeros.sort((a: number, b: number) => a - b);

  let soma = 0;

  for (let num of numeros) {
    soma += num;
  }

  const estatisticas = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length,
  };

  return estatisticas;
}

console.log(obterEstatisticas([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
