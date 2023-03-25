const coinConvert = (dollars) => {
    // Atribuir o valor equivalente em soles
    const soles = dollars * 3.25;
  
    // Atribuir o valor equivalente em pesos mexicanos
    const pesosMexicanos = dollars * 18;
  
    // Atribuir o valor equivalente em pesos chilenos
    const pesosChilenos = dollars * 660;
    
    return [soles, pesosMexicanos, pesosChilenos];
};

  const values = coinConvert(5)
  console.log(values)

/*1 dólar = 3.25 soles
1 dólar = 18 pesos mexicanos
1 dólar = 660 pesos chilenos */