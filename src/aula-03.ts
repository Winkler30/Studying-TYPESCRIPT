interface Pessoa {
  idade: number;
  nome: string;
  isMaiorDeIdade: boolean;
}
const pessoa: Pessoa = {
  idade: 32,
  nome: "João",
  isMaiorDeIdade: true,
};
console.log(pessoa);
