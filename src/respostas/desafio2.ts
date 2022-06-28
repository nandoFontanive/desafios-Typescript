// Desafio 2:
// Como podemos melhorar o esse código usando TS? 
// As class

class Pessoa{
    nome: string;
    idade: number;
    profissao: string;


// Construtor start
    constructor(nome: string, idade: number, profissao: string){
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
}
enum profissao{
    Atriz = "Atriz",
    Padeiro = "Padeiro"
}

let pessoa1 = new Pessoa ("maria", 29, profissao.Atriz);
let pessoa2 = new Pessoa ("roberto", 19, profissao.Padeiro);
let pessoa3 = new Pessoa ("laura", 32, profissao.Atriz);
let pessoa4 = new Pessoa ("carlos", 19, profissao.Padeiro);
