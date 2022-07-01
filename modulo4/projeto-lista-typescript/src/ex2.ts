function imprimeFraseDeApresentacao(
  nome: string,
  dataDeNascimento: string
): string {
  const data: string[] = dataDeNascimento.split("/");
  return `Olá, me chamo ${nome}, nasci no dia ${data[0]}, no mês ${data[1]} do ano de ${data[2]}.`;
}

console.log(imprimeFraseDeApresentacao("Márcio", "06/01/1979"));
