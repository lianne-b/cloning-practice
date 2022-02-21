
const todoForm = document.querySelector(".todo");
const todoInput = document.querySelector(".todo input");
const todoList = document.querySelector(".todo-list");
const TODO_KEY = "New Todo";

// show form -> submit input -> prevent event -> save, paint input 
// -> delete -> remove list -> save

let toDos = [];

function saveToDo() {
    localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.id = newToDo.id;
    span.innerText = newToDo.text;
    button.innerText = "✖️";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

// 수정해야됨~~~~~~~~~~~~~~~~~~~

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    const DeleteID = li.id;
    const getDeleteItem = localStorage.getItem(TODO_KEY);
    // const getDeleteIndex = (JSON.parse(getDeleteItem));
    // if(indexOf(li) == indexOf(getDeleteIndex.DeleteID)) {
        const deleteIndex = toDos.indexOf(JSON.parse(li.id));
    //  let deleteToDos = toDos.splice(getDeleteIndex);
    // }
    saveToDo();
}

//////////////////////

function onToDoSubmit(event) {
    event.preventDefault();
    const newToDo = todoInput.value; // input value is copied into newToDo
    todoInput.value = ""; // the input value is emptied but the data stored in newToDo remains
    const newToDoObj = {
        text: `💬 ${newToDo}`,
        id: Date.now(),
    };
    toDos.push(newToDoObj); // pushed to toDos array
    paintToDo(newToDoObj);
    saveToDo();
}

todoForm.addEventListener("submit", onToDoSubmit);

const savedToDos = localStorage.getItem(TODO_KEY);

if(savedToDos !== null) { 
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

