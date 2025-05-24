const pessoa = {nome:"maycon", idade: 21, senha: 123};

document.writeln(pessoa.nome);

//adicionar um novo objeto
pessoa.sexo = "Masculino"; 

//editar o objeto 
pessoa.nome = "lucas";

//deleta um objeto 
delete pessoa.senha;

console.log(pessoa);