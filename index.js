const urlBackend = "http://localhost:3000"

document.querySelector("listaMusicas")

function buscarMusicas()+{
    const resposta = await fetch(urlBackend)
    const musicas = await resposta.json()

    musicas.forEach((musica) => { })
}