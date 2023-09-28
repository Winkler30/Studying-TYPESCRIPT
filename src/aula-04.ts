interface Pessoas {
  idade: number;
  nome: string;
}

interface Usuarios {
  pessoa: Pessoas;
  cidade: string;
}

const usuario: Usuarios = {
  cidade: "São Paulo",
  pessoa: {
    idade: 43,
    nome: "João",
  },
};


console.log(usuario);
