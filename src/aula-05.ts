interface Estado {
  nome: string;
}

interface Cidade {
  nome: string;
  estado: Estado;
}

interface Endereco {
  rua: string;
  bairro: string;
  cidade: Cidade;
  complemento?: string;
}

const endereco: Endereco = {
  bairro: "Jardim Paulista",
  rua: "Avenida Paulista",
  complemento: "Apto 101",
  cidade: {
    nome: "São Paulo",
    estado: {
      nome: "São Paulo",
    },
  },
};

console.log(endereco.complemento?.substring(3) || "Sem complemento");
console.log(endereco);