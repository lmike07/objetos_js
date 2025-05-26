/* const pessoa = {nome:"maycon", idade: 21, senha: 123};

document.writeln(pessoa.nome);

//adicionar um novo objeto
pessoa.sexo = "Masculino"; 

//editar o objeto 
pessoa.nome = "lucas";

//deleta um objeto 
delete pessoa.senha; 

console.log(pessoa); */

/* const dadosPessoas = {
    nome: "Lucas",
    idade: 21, 
    gostos: ["futebol, programação, comer, treinar"],

    conjuge: { 
        nome: "clara",
        idade: 18,
        gostos: ["comer, dormir"]
    }
};

console.log(dadosPessoas.conjuge.nome, dadosPessoas.nome); */

//Array com Objeto
/* const pessoas = [
    {
    nome: "lucas",
    idade: 21, 
    gostos: ["futebol, programação, comer, treinar"],

    conjuge: { 
        nome: "clara",
        idade: 18,
        gostos: ["comer, dormir"]
    }}, 

     {
    nome: "clara",
    idade: 18, 
    gostos: ["animais, maquiagem, cozinhar"],

    conjuge: { 
        nome: "Lucas",
        idade: 19,
        gostos: ["futebol, programação, comer, treinar"]
    }}, 
     
]; */

/* //Filter => vai criar uma array e retornar todos os itens que satisfaça a condição da função 
console.log(pessoas.filter((item) => item.idade === 21));

Map => vai mapear o array, pegar item a item, criar um array retornar de acordo com uma função 

const resultado = pessoas.map((item, index) => {
    const nomeItem = item.nome;
    if (nomeItem === 'lucas') {
        item.nome = nomeItem.toUpperCase();
    }
    return item
});

console.log(resultado)


find => find vai retornar o primeiro item do aray que satisfaça a condição da função 
const number = [
    50, 90, 100
];

console.log(number.find((item) => item === 50)); */


//Manipulação de Objetos
/* const pessoaAtual= {
    nome: "Maycon",
    idade: 21,
    gostos: "Futebol, café, passear"
}

const pessoa = new Object();

pessoa.nome = 'Maycon';

pessoa['e mail'] = 'exemplo@com.br';


const copiaPessoa = Object.assign({}, pessoa);

console.log(copiaPessoa); */

//Funções em Objetos e THIS

 const pessoas = {
    nome: "lucas",
    idade: 21, 
    gostos: ["futebol, programação, comer, treinar"],

    conjuge: { 
        nome: "clara",
        idade: 18,
        gostos: ["comer, dormir"]
    },
    getNome: function() {
        return 'lucas';
    },
    getIdade: function() {
        return this.idade
    },
    getNomeEIdade: function() {
        return `meu nome é: ${this.getNome()} e minha idade é: ${this.getIdade()}!`
    }

 };

//Fuction() {} = herda o escopo em que foi definida
// arrow () => {} = não herda o escopo em que foi definida

 console.log(pessoas.getNome())
 console.log(pessoas.getIdade())
 console.log(pessoas.getNomeEIdade())


