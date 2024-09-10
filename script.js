class Calculadora {
  constructor(num1 = 0, num2 = 0, res = 0) {
    this.num1 = num1;
    this.num2 = num2;
    this.res = res;
  }

  suma() {
    this.res = this.num1 + this.num2;
    document.getElementById("resultado").value = this.res;
  }

  resta() {
    this.res = this.num1 - this.num2;
    document.getElementById("resultado").value = this.res;
  }

  multiplicacion() {
    this.res = this.num1 * this.num2;
    document.getElementById("resultado").value = this.res;
  }

  division() {
    if (this.num2 !== 0) {
      this.res = this.num1 / this.num2;
      document.getElementById("resultado").value = this.res;
    } else {
      alert("No se puede dividir entre cero");
    }
  }
}

let calculadora1 = new Calculadora();

function actualizarNumeros() {
  calculadora1.num1 = parseFloat(document.getElementById("num1").value) || 0;
  calculadora1.num2 = parseFloat(document.getElementById("num2").value) || 0;
}

function sumar() {
  actualizarNumeros();
  calculadora1.suma();
}

function restar() {
  actualizarNumeros();
  calculadora1.resta();
}

function multiplicar() {
  actualizarNumeros();
  calculadora1.multiplicacion();
}

function dividir() {
  actualizarNumeros();
  calculadora1.division();
}

document.getElementById("sumar").addEventListener("click", sumar);
document.getElementById("restar").addEventListener("click", restar);
document.getElementById("multiplicar").addEventListener("click", multiplicar);
document.getElementById("dividir").addEventListener("click", dividir);
