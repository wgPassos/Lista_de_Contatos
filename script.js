var appForm = document.getElementById("app-form");
var listaPessoas = document.getElementById("listaPessoas");
var btnExemplo = document.getElementById("btnExemplo");
var btnOrder = document.getElementById("btnOrder");

var pessoas = [];

appForm.onsubmit = addPessoa;
btnOrder.onclick = ordernarLista;
btnExemplo.onclick = gerarListaSeed;


function addPessoa(e) {
    e.preventDefaut();

    console.log(e);

    var nome = e.target.pessoaNome.value;
    var sobrenome = e.target.pessoaSobrenome.value;
    // var email = e.target.pessoaEmail.value;
    var telefone = e.target.pessoaTelefone.value;
    // var observacao = e.target.pessoaObservacao.value;

    // var pessoa = { nome, sobrenome, email, telefone, observacao};
    var pessoa = { nome, sobrenome, telefone};

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

function validarCampos(pessoa) {
    var validation = { status: true, erro: "",};

    if (pessoa.nome.length === 0) {
        validation.status = false;
        validation.error = "Preencha o campo Nome";
    } 
    else if (pessoa.sobrenome.length === 0) {
        validation.status = false;
        validation.error = "Preencha o campo Sobrenome";
    } 
    // else if (pessoa.email.length < 10) { // PesquisaR!!!!
    //     validation.status = false;
    //     validation.error = "Preencha o campo E-mail";
    // } 
    return validation;
}

function mostrarLista() {
    listaPessoas.innerHTML = "";
    for (pessoa of pessoas) {
        var nomeE1 = document.createElement("strong");
        nomeE1.appendChild(document.createTextNode(pessoa.nome + " " + pessoa.sobrenome));

        // var emailE1 = document.createElement("p");
        // emailE1.appendChild(document.createTextNode("E-mail: " + pessoa.email));

        var telefoneE1 = document.createElement("p");
        telefoneE1.appendChild(document.createTextNode("Telefone: " + pessoa.telefone));

        // var observacaoE1 = document.createElement("p");
        // observacaoE1.appendChild(document.createTextNode("Observação: " + pessoa.observacao));


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
        // itemE1.appendChild(emailE1);
        itemE1.appendChild(telefoneE1);
        // itemE1.appendChild(observacaoE1);
        itemE1.appendChild(alterarE1);
        itemE1.appendChild(removerE1);

        listaPessoas.appendChild(itemE1);
    }
}

function gerarListaSeed() {
    var pessoasExemplo = [
        // {nome: "Pedro", sobrenome: "Santos", email: "pedro@gmail.com", telefone: 1199999888},
        // {nome: "Ricardo", sobrenome: "Santos", email: "ricardo@gmail.com", telefone: 1177777888},
        // {nome: "Amanda", sobrenome: "Siva", email: "amanda@hotmail.com", telefone: 1166666888},
        // {nome: "Anastacia", sobrenome: "Feltri", email: "feltri@hotmail.com", telefone: 1144444888},
        {nome: 'Lucas', sobrenome: 'Santana', telefone: 1199998888},
		{nome: 'David', sobrenome: 'Silva', telefone: 2199998888},
		{nome: 'Maria', sobrenome: 'Lima', telefone: 3199998888},
		{nome: 'David', sobrenome: 'Oliveira', telefone: 6199998888},
		{nome: 'Carlos', sobrenome: 'Silva', telefone: 3199998888},
		{nome: 'Jessica', sobrenome: 'Lima', telefone: 1199998888},
		{nome: 'Angela', sobrenome: 'Santos', telefone: 3199998888},
    ];
    pessoas = pessoasExemplo;
    mostrarLista();
}

function removerPessoa(indice) {
    // O argumento "indice" determina a posição do primeiro item a ser excluído e o argumento "1" determina o número de elementos a serem excluídos.
    pessoas.splice(indice, 1);
    mostrarLista();
}

function alterarPessoa(indice) {
    var btnCadastrar = document.getElementById("btnCadastrar");
    var btnEditar = document.getElementById("btnEditar");
    var input_nome = document.getElementById("pessoaNome");
    var input_sobrenome = document.getElementById("pessoaSobrenome");
    // var input_email = document.getElementById("pessoaEmail");
    var input_telefone = document.getElementById("pessoaTelefone");
    // var input_observacao = document.getElementById("pessoaObservacao");


    btnCadastrar.setAttribute("style", "display:nome");
    btnEditar.setAttribute("style", "display:");

    input_nome.value = pessoas[indice].nome;
    input_sobrenome.value = pessoas[indice].sobrenome;
    // input_email.value = pessoas[indice].email;
    input_telefone = pessoas[indice].telefone;
    // input_observacao = pessoas[indice].observacao;

    btnEditar.onclick = function () {
        var pessoaAlterada = {
            nome: input_nome.value,
            sobrenome: input_sobrenome.value,
            // email: input_email.value,
            telefone: input_telefone.value,
            // observacao: input_observacao.value,
        };

        var validation = validarCampos(pessoaAlterada);
        if (!validation.status) {
            alert(validation.error);
            return;
        }

        input_nome.value = "";
        input_sobrenome = "";
        // input_email = "";
        input_telefone = "";
        // input_observacao = "";

        btnCadastrar.setAttribute("style", "display:");
        btnEditar.setAttribute("style", "display:nome");

        pessoas[indice] = pessoaAlterada;
        mostrarLista();
    };

}

function ordernarLista() {
    pessoas.sort(function(a, b) {
        var x = a.nome.toLowerCase() + a.sobrenome.toLowerCase();
        var y = b.nome.toLowerCase() + b.sobrenome.toLowerCase();
        if (x < y) return -1;
        if (x >y) return 1;
        return 0;
    });
    mostrarLista();
}