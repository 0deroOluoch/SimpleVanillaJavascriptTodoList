// Selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo")





//Event Listenr

todoButton.addEventListener('click' ,addTodo)
todoList.addEventListener('click',deleteCheck)
filterOption.addEventListener('click', filterTodo)



//Functions

function addTodo(event){
    event.preventDefault();

    
    //todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");


    //create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-item');

    todoDiv.appendChild(newTodo);



    //MARK BUTTON
    const completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class="fas fa-check-square"></i>';
    completedButton.classList.add("complete-btn")
    todoDiv.appendChild(completedButton)

      //TRASH BUTTON
    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn")
    todoDiv.appendChild(trashButton)

    //Append To List
    todoList.appendChild(todoDiv)

    //clear to do input 
    todoInput.value = ""
}

function deleteCheck(e){
    const item = e.target;

    //delete item on list
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.classList.add("fall")
        todo.addEventListener("transitionend",function(){
            todo.remove();
        })
        
    }

    //Ccheck Mark

    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed")
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.div.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = 'flex';
                break;
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex'
                }else {
                    todo.style.display = "none"
                }
        }
    })
       
   
    
}