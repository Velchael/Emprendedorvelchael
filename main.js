const carrusel = document.querySelector(".carrusel-items");

let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
let step = 1;
const start = () => {
  intervalo = setInterval(function () {
    carrusel.scrollLeft = carrusel.scrollLeft + step;
    if (carrusel.scrollLeft >= maxScrollLeft) {
        step = -1;
      } else if (carrusel.scrollLeft <= 0) {
        step = 1;
      }
  }, 20);
};

const stop = () => {
  clearInterval(intervalo);
};

carrusel.addEventListener("mouseover", () => {
  stop();
});

carrusel.addEventListener("mouseout", () => {
  start();
});

start();

//////////////funcion comprar y efectuar comprar uno
  function mostrarTabla() {
    var tabla = document.getElementById("tablaCompra");
    var boton = document.getElementById("comprarButton");
    
    if (tabla.style.display === "none") {
      tabla.style.display = "block";
      boton.textContent = "Desativar COMPRAR";
      boton.style.backgroundColor = "red";
      boton.style.color = "white";
    } else {
      tabla.style.display = "none";
      boton.textContent = "Ativar COMPRAR";
      boton.style.backgroundColor = "green";
      boton.style.color = "white";
    }
  }

////////////////funcion comprar e efctuar comprar dos

function mostrarTablados() {
  var tabla = document.getElementById("tablaComprados");
  var boton = document.getElementById("comprarButtondos");
  
  if (tabla.style.display === "none") {
    tabla.style.display = "block";
    boton.textContent = "Desativar COMPRAR";
    boton.style.backgroundColor = "red";
    boton.style.color = "white";
  } else {
    tabla.style.display = "none";
    boton.textContent = "Ativar COMPRAR";
    boton.style.backgroundColor = "green";
    boton.style.color = "white";
  }
}

function mostrarTablatres() {
  var tabla = document.getElementById("tablaCompratres");
  var boton = document.getElementById("comprarButtontres");
  
  if (tabla.style.display === "none") {
    tabla.style.display = "block";
    boton.textContent = "Desativar COMPRAR";
    boton.style.backgroundColor = "red";
    boton.style.color = "white";
  } else {
    tabla.style.display = "none";
    boton.textContent = "Ativar COMPRAR";
    boton.style.backgroundColor = "green";
    boton.style.color = "white";
  }
}

function mostrarTablaquatro() {
  var tabla = document.getElementById("tablaCompraquatro");
  var boton = document.getElementById("comprarButtonquatro");
  
  if (tabla.style.display === "none") {
    tabla.style.display = "block";
    boton.textContent = "Desativar COMPRAR";
    boton.style.backgroundColor = "red";
    boton.style.color = "white";
  } else {
    tabla.style.display = "none";
    boton.textContent = "Ativar COMPRAR";
    boton.style.backgroundColor = "green";
    boton.style.color = "white";
  }
}

function mostrarTablacinco() {
  var tabla = document.getElementById("tablaCompracinco");
  var boton = document.getElementById("comprarButtoncinco");
  
  if (tabla.style.display === "none") {
    tabla.style.display = "block";
    boton.textContent = "Desativar COMPRAR";
    boton.style.backgroundColor = "red";
    boton.style.color = "white";
  } else {
    tabla.style.display = "none";
    boton.textContent = "Ativar COMPRAR";
    boton.style.backgroundColor = "green";
    boton.style.color = "white";
  }
}

function mostrarTablaseis() {
  var tabla = document.getElementById("tablaCompraseis");
  var boton = document.getElementById("comprarButtonseis");
  
  if (tabla.style.display === "none") {
    tabla.style.display = "block";
    boton.textContent = "Desativar COMPRAR";
    boton.style.backgroundColor = "red";
    boton.style.color = "white";
  } else {
    tabla.style.display = "none";
    boton.textContent = "Ativar COMPRAR";
    boton.style.backgroundColor = "green";
    boton.style.color = "white";
  }
}
function mostrarTablasiete() {
  var tabla = document.getElementById("tablaComprasiete");
  var boton = document.getElementById("comprarButtonsiete");
  
  if (tabla.style.display === "none") {
    tabla.style.display = "block";
    boton.textContent = "Desativar COMPRAR";
    boton.style.backgroundColor = "red";
    boton.style.color = "white";
  } else {
    tabla.style.display = "none";
    boton.textContent = "Ativar COMPRAR";
    boton.style.backgroundColor = "green";
    boton.style.color = "white";
  }
}

function mostrarTablaocho() {
  var tabla = document.getElementById("tablaCompraocho");
  var boton = document.getElementById("comprarButtonocho");
  
  if (tabla.style.display === "none") {
    tabla.style.display = "block";
    boton.textContent = "Desativar COMPRAR";
    boton.style.backgroundColor = "red";
    boton.style.color = "white";
  } else {
    tabla.style.display = "none";
    boton.textContent = "Ativar COMPRAR";
    boton.style.backgroundColor = "green";
    boton.style.color = "white";
  }
}
function mostrarTablanueve() {
  var tabla = document.getElementById("tablaCompranueve");
  var boton = document.getElementById("comprarButtonnueve");
  
  if (tabla.style.display === "none") {
    tabla.style.display = "block";
    boton.textContent = "Desativar COMPRAR";
    boton.style.backgroundColor = "red";
    boton.style.color = "white";
  } else {
    tabla.style.display = "none";
    boton.textContent = "Ativar COMPRAR";
    boton.style.backgroundColor = "green";
    boton.style.color = "white";
  }
}