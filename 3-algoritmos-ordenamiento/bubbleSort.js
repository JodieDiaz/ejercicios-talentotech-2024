function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      // Si el elemento actual es mayor que el siguiente, los intercambiamos
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // Intercambio
        swapped = true; // Indicamos que hubo un intercambio
      }
    }
    n--; // Reducimos el rango a ordenar
  } while (swapped);

  return arr; // Retorna el arreglo ya ordenado
}

// Ejemplo de uso
console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));
