function addTask() {
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();
  const taskDateInput = document.getElementById("max_date");
  const taskDate = taskDateInput.value;

  if (taskText !== "" && taskDate !== "") { 
    const taskList = document.getElementById("task-list");
    const taskItem = document.createElement("li");
    taskItem.className = "task";
    taskItem.innerHTML = `
        ${taskText} - ${taskDate}
        <button onclick="editTask(this)">Editar</button>
        <button onclick="deleteTask(this)">Eliminar</button>
    `;
    taskList.appendChild(taskItem);
    taskInput.value = "";
    taskDateInput.value = "";
  } else {
    alert("Por favor, escribe una tarea y selecciona una fecha");
  }
}

function editTask(button) {
  const taskItem = button.parentElement;
  const taskText = prompt(
    "Edita tu tarea:",
    taskItem.firstChild.textContent.trim()
  );
  if (taskText !== null && taskText.trim() !== "") {
    taskItem.firstChild.textContent = taskText.trim();
  }
}

function deleteTask(button) {
  const taskItem = button.parentElement;
  taskItem.remove();
}
