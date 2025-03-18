// Array para armazenar os nomes dos amigos
const listaDeAmigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }

    listaDeAmigos.push(nomeAmigo);
    atualizarListaDeAmigos();
    inputAmigo.value = ''; 
    inputAmigo.focus(); 
}

// Função para atualizar a lista exibida na página
function atualizarListaDeAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; 

    listaDeAmigos.forEach((amigo, index) => {
        const item = document.createElement('li');
        item.textContent = amigo;
        item.setAttribute('role', 'listitem');
        listaAmigos.appendChild(item);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert('A lista está vazia. Adicione nomes antes de sortear.');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSorteado = listaDeAmigos[indiceSorteado];

    exibirResultado(amigoSorteado);
}

// Função para exibir o resultado do sorteio
function exibirResultado(amigoSorteado) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; 

    const itemResultado = document.createElement('li');
    itemResultado.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
    itemResultado.setAttribute('role', 'listitem');
    resultado.appendChild(itemResultado);
}
