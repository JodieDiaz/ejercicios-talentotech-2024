function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr; // Caso base: un arreglo de tamaño 1 ya está ordenado
  }

  let mid = Math.floor(arr.length / 2); // Dividimos el arreglo en dos
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  // Unimos las dos mitades ordenadas
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Combinamos ambas mitades comparando los elementos
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++; // Movemos el puntero de la izquierda
    } else {
      result.push(right[rightIndex]);
      rightIndex++; // Movemos el puntero de la derecha
    }
  }

  // Si quedaron elementos, los agregamos
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Ejemplo de uso
console.log(mergeSort([64, 34, 25, 12, 22, 11, 90]));
