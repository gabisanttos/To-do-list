document.addEventListener("DOMContentLoaded", function() {
    const todoInput = document.getElementById('input-box');
    const todoList = document.getElementById('To-do-list');
    const addTaskButton = document.getElementById('btn-new-task');

    addTaskButton.addEventListener("click", function() {
        if (todoInput.value.trim() !== "") {
            addTask(todoInput.value.trim());
            todoInput.value = "";
        } else {
            alert('Digite algo para inserir na sua lista');
        }
    });

    todoInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter" && todoInput.value.trim() !== "") {
            addTask(todoInput.value.trim());
            todoInput.value = "";
        }
    });

    function addTask(taskText) {
        const newTask = document.createElement("li");
        const mainDiv = document.createElement("div");
        const buttonDiv = document.createElement("div");
        const textDiv = document.createElement("div"); 

        // Adiciona botão de excluir
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", function() {
            todoList.removeChild(mainDiv);
        });

        newTask.textContent = taskText;
        mainDiv.id = "teste";

        // Adiciona botão de concluir
        const completeButton = document.createElement("input");
        completeButton.type = "checkbox";
        completeButton.classList.add("complete-button");
        completeButton.addEventListener("change", function() {
            if (this.checked) {
                newTask.style.textDecoration = "line-through";
            } else {
                newTask.style.textDecoration = "none";
            }
        });

        textDiv.appendChild(newTask);
        buttonDiv.appendChild(completeButton);
        buttonDiv.appendChild(deleteButton); 
        mainDiv.appendChild(textDiv);
        mainDiv.appendChild(buttonDiv);

        todoList.appendChild(mainDiv);
    }

}); 