document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario");
  const resultadoDiv = document.getElementById("resultado");
  const grafoDiv = document.getElementById("grafo");

  // Distancias en kilómetros entre las ciudades
  const distancias = {
    bogota: { soacha: 16, chia: 25, zipaquira: 49, cajica: 38 },
    soacha: { bogota: 16, chia: 45, zipaquira: 32, cajica: 35 },
    chia: { bogota: 25, soacha: 45, zipaquira: 30, cajica: 15 },
    zipaquira: { bogota: 49, soacha: 32, chia: 30, cajica: 30 },
    cajica: { bogota: 38, soacha: 35, chia: 15, zipaquira: 30 },
  };

  // Consumo promedio de combustible por tipo de vehículo (litros/100 km)
  const consumoVehiculos = {
    moto: 3, // Ejemplo de consumo para una moto
    carro: 8, // Ejemplo de consumo para un carro
    "carro-antiguo": 12, // Ejemplo de consumo para un carro antiguo
    "carro-hibrido": 5, // Ejemplo de consumo para un carro híbrido
    camion: 20, // Ejemplo de consumo para un camión
    bus: 25, // Ejemplo de consumo para un bus
  };

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const origen = document.getElementById("origen").value;
    const destino = document.getElementById("destino").value;
    const precioGasolina = parseFloat(
      document.getElementById("precio-gasolina").value
    );
    const vehiculo = document.getElementById("vehiculo").value;

    // Calcular la distancia y el consumo de combustible
    const distancia = distancias[origen][destino];
    const consumoPor100Km = consumoVehiculos[vehiculo];
    const litrosNecesarios = (distancia / 100) * consumoPor100Km;
    const costo = litrosNecesarios * precioGasolina;

    // Formatear el costo
    const formatter = new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    });
    const costoFormateado = formatter.format(costo);

    // Mostrar el resultado
    resultadoDiv.innerHTML = `
            <p>Distancia de ${
              origen.charAt(0).toUpperCase() + origen.slice(1)
            } a ${
      destino.charAt(0).toUpperCase() + destino.slice(1)
    }: ${distancia} km</p>
            <p>Costo del recorrido: ${costoFormateado}</p>
        `;

    // Mostrar el gráfico
    mostrarGrafo();
  });

  function mostrarGrafo() {
    const cy = cytoscape({
      container: grafoDiv,
      elements: [
        { data: { id: "bogota", label: "Bogotá" } },
        { data: { id: "soacha", label: "Soacha" } },
        { data: { id: "chia", label: "Chía" } },
        { data: { id: "zipaquira", label: "Zipaquirá" } },
        { data: { id: "cajica", label: "Cajicá" } },
        { data: { source: "bogota", target: "soacha", label: "16 km" } },
        { data: { source: "bogota", target: "chia", label: "25 km" } },
        { data: { source: "bogota", target: "zipaquira", label: "49 km" } },
        { data: { source: "bogota", target: "cajica", label: "38 km" } },
        { data: { source: "soacha", target: "chia", label: "45 km" } },
        { data: { source: "soacha", target: "zipaquira", label: "32 km" } },
        { data: { source: "soacha", target: "cajica", label: "35 km" } },
        { data: { source: "chia", target: "zipaquira", label: "30 km" } },
        { data: { source: "chia", target: "cajica", label: "15 km" } },
        { data: { source: "zipaquira", target: "cajica", label: "30 km" } },
      ],
      style: [
        {
          selector: "node",
          style: {
            "background-color": "#1f77b4", // Color de fondo de los nodos
            "border-color": "#ffffff", // Color del borde de los nodos
            "border-width": 2, // Ancho del borde de los nodos
            width: "70px", // Ancho de los nodos
            height: "70px", // Alto de los nodos
            label: "data(label)", // Etiqueta del nodo
            "text-valign": "center", // Alineación vertical del texto
            "text-halign": "center", // Alineación horizontal del texto
            color: "#ffffff", // Color del texto
            "font-size": "14px",
            "font-weight": "bold",
            "text-wrap": "wrap", // Ajustar el texto en el nodo
            "text-max-width": "50px", // Máximo ancho del texto para evitar desbordamiento
          },
        },
        {
          selector: "edge",
          style: {
            width: 2,
            "line-color": "#b9b0aa", // Color de la línea
            "target-arrow-color": "#888", // Color de la flecha
            "target-arrow-shape": "triangle", // Forma de la flecha
            label: "data(label)", // Etiqueta del borde
            "font-size": "12px", // Tamaño de la fuente
            "font-weight": "bold",
            color: "#333", // Color del texto
            "text-rotation": "autorotate", // Rotación automática del texto
          },
        },
      ],
      layout: {
        name: "circle", // Diseño en círculo para distribuir los nodos
        padding: 10,
      },
    });
  }
});
