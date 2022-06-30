// O TypeScript não deixa atribuir um valor do tipo number pois a variável inicialmente foi declarada como string.
// Para contornar essa situação usa-se o union type (|) pois ele nos permite que a variável assuma mais de um tipo.

let ano: string | number;
ano = "Dois mil e vinte e dois";
ano = 2022;
