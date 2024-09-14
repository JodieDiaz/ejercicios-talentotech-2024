// Datos de las flores
const flores = [
  { nombre: "Freedom", color: "Rojo", cantidad: 50, variedad: "Variedad A" },
  { nombre: "Pink Floyd", color: "Rosa", cantidad: 30, variedad: "Variedad B" },
  {
    nombre: "Absolut in Pink",
    color: "Rosa",
    cantidad: 20,
    variedad: "Variedad C",
  },
  { nombre: "Blessing", color: "Blanco", cantidad: 40, variedad: "Variedad D" },
  {
    nombre: "Pink Mondial",
    color: "Rosa",
    cantidad: 15,
    variedad: "Variedad E",
  },
  { nombre: "Luciano", color: "Naranja", cantidad: 10, variedad: "Variedad F" },
  {
    nombre: "Cream Shimmer",
    color: "Crema",
    cantidad: 25,
    variedad: "Variedad G",
  },
  { nombre: "Mondial", color: "Blanco", cantidad: 35, variedad: "Variedad H" },
  { nombre: "Shimmer", color: "Dorado", cantidad: 50, variedad: "Variedad I" },
  { nombre: "Alive", color: "Verde", cantidad: 45, variedad: "Variedad J" },
  { nombre: "Momentum", color: "Rojo", cantidad: 60, variedad: "Variedad K" },
  { nombre: "Gisele", color: "Blanco", cantidad: 30, variedad: "Variedad L" },
  {
    nombre: "Deep Purple",
    color: "Morado",
    cantidad: 20,
    variedad: "Variedad M",
  },
];

// Función para mostrar la información de las flores en la tabla
function mostrarFlores() {
  const listaFlores = document.getElementById("flores-lista");
  flores.forEach((flor) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${flor.nombre}</td>
            <td>${flor.color}</td>
            <td>${flor.cantidad}</td>
            <td>${flor.variedad}</td>
        `;
    listaFlores.appendChild(row);
  });
}

// Llamar a la función para mostrar las flores cuando la página se cargue
document.addEventListener("DOMContentLoaded", mostrarFlores);
