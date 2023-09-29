const funcaoCallback = (valor: number): void => {
  console.log("Função callback" + valor);
};

const funcaoTeste2 = (valor1: number, valor2: number, callback: (n: number) => void): string => {
  if (valor1 > valor2) {
    callback(valor1);
  }
  return "";
};

funcaoTeste2(254, 2, funcaoCallback);
funcaoTeste2(254, 2, (x: number) => console.log("Função callback" + x));
