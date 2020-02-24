var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('listToDos')) || [];

function renderTodo(){
    listElement.innerHTML = '';
    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href','#')

        var linkText = document.createTextNode('Excluir');

        var posicao = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'removerTodo('+ posicao +')');


        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}

renderTodo();

function addTodo(){

    var inputText = inputElement.value;
    todos.push(inputText);
    inputElement.value = '';

    renderTodo();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function removerTodo(posicao){
    todos.splice(posicao,1);
    renderTodo();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('listToDos', JSON.stringify(todos)); 
}