let amigos = [];

function agregarAmigo() {
    var input = document.getElementById("amigo"); 
    var agregar = input.value; 
    if (agregar === "") { 
        alert("Por favor, ingrese un nombre");
    } else {
        amigos.push(agregar);
        alert(`${agregar} ha sido agregado a la lista de amigos.`);
        input.value = "";
    }
    mostrarAmigos();
}

function mostrarAmigos() {
    var lista = document.getElementById("listaAmigos"); 
    lista.innerHTML = ""; 
    for (var i = 0; i < amigos.length; i++) { 
        var li = document.createElement("li"); 
        li.textContent = amigos[i]; 
        lista.appendChild(li); 
    }
}

function sortearAmigo() {
    if (amigos.length === 0) { 
        alert("No hay amigos disponibles para sortear.");
        return;
    }
    var indiceAleatorio = Math.floor(Math.random() * amigos.length); 
    var amigoSorteado = amigos[indiceAleatorio]; 
    var resultado = document.getElementById("resultado"); 
    resultado.innerHTML = `Tu amigo sorteado es:${amigoSorteado}`; 
}
