var appForm = document.querySelector("#app-form");
var listaPessoas = document.querySelector("#listaPessoas");
var btnExemplo = document.querySelector("#btnExemplo");
var btnOrder = document.querySelector("#btnOrder");

var pessoas = [];

appForm.onsubmit = addPessoa;
btnOrder.onclick = ordernarLista;
btnExemplo.onclick = gerarListaSeed;


function addPessoa(e) {
    e.preventDefaut();

    console.log(e);

    var nome = e.target.pessoaNome.value;
    var sobrenome = e.target.pessoaSobrenome.value;
    var email = e.target.pessoaEmail.value;
    var telefone = e.target.pessoaTelefone.value;
    var observacao = e.target.pessoaObservacao.value;

    var pessoa = { nome, sobrenome, email, telefone, observacao};

    var validation = validarCampos(pessoa);
    if (!validation.status) {
        alert(validation.error);
        return;
    }

    pessoas.push(pessoa);
    appForm.reset();
    mostrarLista();
    console.log(pessoas);
}

function validarCampos() {
    var validation = { status: true, erro: "",};

    if (pessoa.nome.length === 0) {
        validation.status = false;
        validation.error = "Preencha o campo Nome";
    } else if (pessoa.sobrenome.length === 0) {
        validation.status = false;
        validation.error = "Preencha o campo Sobrenome";
    } else if (pessoa.email.length < 10) { // PesquisaR!!!!
        validation.status = false;
        validation.error = "Preencha o campo E-mail";
    } 
    return validation;
}

function mostrarLista() {
    listaPessoas.innerHTML = "";
    for (pessoa of pessoas) {
        var nomeE1 = document.createElement("strong");
        nomeE1.appendChild(document.createTextNode(pessoa.nome + " " + pessoa.sobrenome));

        var emailE1 = document.createElement("p");
        emailE1.appendChild(document.createTextNode("E-mail: " + pessoa.email));

        var telefoneE1 = document.createElement("p");
        telefoneE1.appendChild(document.createTextNode("Telefone: " + pessoa.telefone));

        var observacaoE1 = document.createElement("p");
        observacaoE1.appendChild(document.createTextNode("Observação: " + pessoa.observacao));


        var indice = pessoas.indexOf(pessoa);


        var removerE1 = document.createElement("a");
        removerE1.setAttribute("href", "#");
        var removerText = document.createTextNode("Remover");
        removerE1.appendChild(removerText);
        removerE1.setAttribute("onclick", "removerPessoa(" + indice + ")");

        var alterarE1 = document.createElement("a");
        alterarE1.setAttribute("href", "#");
        var alterarText = document.createTextNode("Alterar");
        alterarE1.appendChild(alterarText);
        alterarE1.setAttribute("onclick", "alterarPessoa(" + indice + ")");

        var itemE1 = document.createElement("li");
        itemE1.appendChild(nomeE1);
        itemE1.appendChild(emailE1);
        itemE1.appendChild(telefoneE1);
        itemE1.appendChild(observacaoE1);
        itemE1.appendChild(alterarE1);
        itemE1.appendChild(removerE1);

        listaPessoas.appendChild(itemE1);
    }
}

function gerarListaSeed() {
    var pessoasExemplo = [
        {nome: "Pedro", sobrenome: "Santos", email: "pedro@gmail.com", telefone: 1199999888},
        {nome: "Ricardo", sobrenome: "Santos", email: "ricardo@gmail.com", telefone: 1177777888},
        {nome: "Amanda", sobrenome: "Siva", email: "amanda@hotmail.com", telefone: 1166666888},
        {nome: "Anastacia", sobrenome: "Feltri", email: "feltri@hotmail.com", telefone: 1144444888},
    ];
    pessoas = pessoasExemplo;
    mostrarLista();
}

function removerPessoa(indice) {
    // O argumento "indice" determina a posição do primeiro item a ser excluído e o argumento "1" determina o número de elementos a serem excluídos.
    pessoas.splice(indice, 1)
}

function alterarPessoa() {

}

function ordernarLista() {

}