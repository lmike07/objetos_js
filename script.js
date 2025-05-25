const pessoa = {nome:"maycon", idade: 21, senha: 123};

document.writeln(pessoa.nome);

//adicionar um novo objeto
pessoa.sexo = "Masculino"; 

//editar o objeto 
pessoa.nome = "lucas";

//deleta um objeto 
delete pessoa.senha;

/* console.log(pessoa); */

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

const pessoas = [
    {
    nome: "Lucas",
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
     
];

console.log(pessoas[1].conjuge.nome)
