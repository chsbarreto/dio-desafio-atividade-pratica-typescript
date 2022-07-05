// Resposta ao Desafio:
// Como podemos melhorar o esse código usando TS? 

const pessoa1: {nome: string, idade: number, profissao: string} = {
    nome: 'maria',
    idade: 29,
    profissao: 'atriz',
}

//Usando uma interface
interface pessoa {
    nome: string,
    idade: number,
    profissao: string,
}

const pessoa2: pessoa = {
    nome: 'Roberto',
    idade: 19,
    profissao: 'Padeiro',
}

//Como Objeto

const pessoa3 = {} as pessoa;
    pessoa3.nome = 'laura';
    pessoa3.idade = 32;
    pessoa3.profissao = 'Atriz';


// Também como objeto
const pessoa4: pessoa = {
    nome: 'Carlos',
    idade: 19,
    profissao: 'padeiro'
}


