// Como podemos rodar isso em um arquivo .ts sem causar erros? 

//Resposta 1
const funcionario = {
    codigo: 10,
    nome: 'João'
};

//Resposta 2
const funcionario2: {codigo: number, nome: string} = {
    codigo: 11,
    nome: "Antonio",
}

//Usando interface
interface funcionario {
    codigo: number,
    nome: String
}

const funcionario3: funcionario = {
    codigo: 12,
    nome: 'Pedro'
}

//Usando Objetos
//Versao 1
const funcionarioObj = {} as funcionario;
funcionarioObj.codigo = 13;
funcionarioObj.nome = 'Paulo';

//Usando Objetos - Versao 2
const funcionarioObj2: funcionario = {
    codigo: 14,
    nome: 'Saulo'
}
