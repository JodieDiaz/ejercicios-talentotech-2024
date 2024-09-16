// Función para agregar una nueva tarea con la fecha
function addTask() {
  // Obtener el valor del campo de texto de la tarea
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();

  // Obtener la fecha seleccionada
  const taskDateInput = document.getElementById("max_date");
  const taskDate = taskDateInput.value; // Obtiene la fecha del input

  // Verificar que ambos campos (texto y fecha) no estén vacíos
  if (taskText !== "" && taskDate !== "") {
    // Obtener el elemento de la lista de tareas
    const taskList = document.getElementById("task-list");

    // Crear un nuevo elemento de lista (nodo)
    const taskItem = document.createElement("li"); // Método `createElement()`
    taskItem.className = "task";
    taskItem.innerHTML = `
            ${taskText} - ${taskDate}
            <button onclick="editTask(this)">Editar</button>
            <button onclick="deleteTask(this)">Eliminar</button>
        `;

    // Agregar el nuevo elemento de tarea a la lista (en la estructura del DOM)
    taskList.appendChild(taskItem); // Método `appendChild()`

    // Limpiar los campos de entrada después de agregar la tarea
    taskInput.value = "";
    taskDateInput.value = "";
  } else {
    // Mostrar un mensaje de alerta si faltan datos
    alert("Por favor, escribe una tarea y selecciona una fecha");
  }
}

// Función para editar una tarea existente
function editTask(button) {
  // Obtener el elemento de la tarea a editar (nodo)
  const taskItem = button.parentElement; // Método `parentElement`

  // Solicitar al usuario que ingrese el nuevo texto para la tarea
  const taskText = prompt(
    "Edita tu tarea:",
    taskItem.firstChild.textContent.trim()
  ); // Método `prompt()`

  // Verificar que el texto no esté vacío antes de actualizar
  if (taskText !== null && taskText.trim() !== "") {
    taskItem.firstChild.textContent = taskText.trim(); // Método `textContent`
  }
}

// Función para eliminar una tarea
function deleteTask(button) {
  // Obtener el elemento de la tarea a eliminar (nodo)
  const taskItem = button.parentElement; // Método `parentElement`

  // Eliminar el elemento de la tarea de la lista (en la estructura del DOM)
  taskItem.remove(); // Método `remove()`
}
