function fazerGet(url) {
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

function criaLinha(usuario) {

    return `<thead><th>id</th><th>nome</th><th>qtd</th><th>valor</th></thead>
    <tbody>${usuario.map(n =>
        `
        <tr>
            <td>${n.id}</td>
            <td>${n.nome}</td>
            <td>${n.quantidade}</td>
            <td>${n.valor}</td>
        </tr>
        `
    ).join('')}
    </tbody>`;
}

function main() {
    let data = fazerGet("http://localhost:8080/api/produtos");
    console.log(data)
    let usuarios = JSON.parse(data)
    let tabela = document.querySelector('#tabela')
    let linha = criaLinha(usuarios);
    tabela.innerHTML = linha

}

main();