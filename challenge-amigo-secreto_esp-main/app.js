// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
  let valor = document.getElementById("amigo").value;

  if (valor.trim() === "") {
    alert("por favor, inserte un nombre.");
    return;
  }
  
  amigos.push(valor); //agrega el valor al areglo de amigos
  console.log("amigos actuales:",amigos);

  //limpia el campo de entrada 
  document.getElementById("amigo").value = "";
  actualizarLista(); // llamar ala funcion

}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);

    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("no hay amigos en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigosSorteado = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `<li>${amigosSorteado}</li>`;
}

