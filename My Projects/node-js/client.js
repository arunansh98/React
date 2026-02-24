async function displayAllTasks() {
  const response = await fetch("http:localhost:3000/tasks");
  const data = await response.json();
  console.log({ data });
  const tasksDiv = document.getElementById("tasks");
  tasksDiv.innerHTML = ``;
  for (let i = 0; i < data.length; i++) {
    const task = data[i];
    const { id, title, completed } = task;
    const taskDiv = document.createElement("div");
    const idEle = document.createElement("h2");
    const titleEle = document.createElement("h2");
    const completedEle = document.createElement("h2");
    idEle.innerText = "Id : " + id;
    titleEle.innerText = "Title : " + title;
    completedEle.innerText = "Completed : " + completed;
    taskDiv.appendChild(idEle);
    taskDiv.appendChild(titleEle);
    taskDiv.appendChild(completedEle);
    tasksDiv.appendChild(taskDiv);
  }
}

async function createTask(task) {
  const response = await fetch("http:localhost:3000/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const data = await response.json();
  console.log({ data });
  displayAllTasks();
}

function handleCreateTask() {
  const createTaskBtn = document.getElementById("create-task");
  createTaskBtn.addEventListener("click", () =>
    createTask({
      title: "Workout",
      completed: false,
    }),
  );
}

async function updateTask(id, task) {
  const response = await fetch(`http:localhost:3000/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const data = await response.json();
  console.log({ data });
  displayAllTasks();
}

function handleUpdateTask() {
  const updateTaskBtn = document.getElementById("update-task");
  updateTaskBtn.addEventListener("click", () =>
    updateTask(2, {
      completed: false,
    }),
  );
}

async function deleteTask(id) {
  const response = await fetch(`http:localhost:3000/tasks/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log({ data });
  displayAllTasks();
}

function handleDeleteTask() {
  const deleteTaskBtn = document.getElementById("delete-task");
  deleteTaskBtn.addEventListener("click", () => deleteTask(3));
}

displayAllTasks();
handleCreateTask();
handleUpdateTask();
handleDeleteTask();
