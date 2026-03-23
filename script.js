// Récupérer les tâches stockées ou initialiser
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Fonction pour afficher les tâches
function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.text;
        li.style.textDecoration = task.done ? 'line-through' : 'none';
        li.onclick = () => toggleTask(index);
        taskList.appendChild(li);
    });
    checkAllDone();
}

// Ajouter une tâche
function addTask() {
    const input = document.getElementById('taskInput');
    if(input.value.trim() === '') return;
    tasks.push({ text: input.value.trim(), done: false });
    input.value = '';
    saveTasks();
    displayTasks();
}

// Basculer l'état d'une tâche
function toggleTask(index) {
    tasks[index].done = !tasks[index].done;
    saveTasks();
    displayTasks();
}

// Vérifier si toutes les tâches sont terminées
function checkAllDone() {
    if(tasks.length && tasks.every(task => task.done)) {
        alert("Bravo ! Toutes les tâches sont terminées !");
    }
}

// Sauvegarder dans localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Initialisation
document.getElementById('addBtn').onclick = addTask;
displayTasks();
