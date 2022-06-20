const convertTemp = (temp, scale) => {
    if (scale === "F") {
      const fahrenheitScale = (temp * 9) / 5 + 32;
      return `${temp}° Celsius é equivalente a ${fahrenheitScale}° Fahrenheit.`;
    } else if (scale === "K") {
      const kelvinScale = temp + 273.15;
      return `${temp}° Celsius é equivalente a ${kelvinScale}° Kelvin.`;
    } else {
      return `Erro. Parâmetro inválido.`;
    }
  };
  
  console.log(convertTemp(30, "F"))
  console.log(convertTemp(30, "K"))