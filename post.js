var xhr = new XMLHttpRequest();
function doc() {
    const documento = `{
            "nome": "Xaome Note 9 Pro",
            "quantidade": 20,
            "valor": 10000
        }`
    return documento;
}
xhr.open("POST", "http://localhost:8080/api/produto");
xhr.setRequestHeader("Content-Type", "application/json");

let novo = doc();
console.log(novo)
xhr.send(novo)
