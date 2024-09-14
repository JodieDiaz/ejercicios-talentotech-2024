function quickSort(arr) {
  if (arr.length <= 1) {
    return arr; // Caso base: un arreglo de tamaño 0 o 1 ya está ordenado
  }

  let pivot = arr[arr.length - 1]; // Elegimos el último elemento como pivote
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]); // Elementos menores al pivote
    } else {
      right.push(arr[i]); // Elementos mayores al pivote
    }
  }

  // Ordenamos las sublistas izquierda y derecha, y luego las combinamos
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Ejemplo de uso
console.log(quickSort([64, 34, 25, 12, 22, 11, 90]));
