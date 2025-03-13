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

}

