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
            "background-color": "#666",
            label: "data(label)",
            "text-valign": "center",
            "text-halign": "center",
          },
        },
        {
          selector: "edge",
          style: {
            width: 2,
            "line-color": "#ccc",
            "target-arrow-color": "#ccc",
            "target-arrow-shape": "triangle",
            label: "data(label)",
            "text-rotation": "autorotate",
          },
        },
      ],
      layout: {
        name: "grid",
        rows: 3,
      },
    });
  }
});
