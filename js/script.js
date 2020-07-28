
// Declaration
const todoBtn = document.getElementById('todoBtn');
const todoList = document.getElementById('todoList');


// Events 
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('change', checkItem);



function addTodo(e) {
    e.preventDefault();
    
    let todoInput = document.getElementById('todoInput');
    let todoValue = todoInput.value;
    
    createTodoItem(todoValue);
    // move to when click the inputbox
    // todoInput.value = '';
    testBtnDelete();
    
}
// Functions
function checkItem() {
    // weird but works
    let itemCheck = event.target.parentElement;
    itemCheck.classList.toggle("itemChecked");
    // change order of the list, I would think about using CSS flexbox to it. is it bad practice?
    // but it is JS class right lol 

    let list = itemCheck.parentElement;
    list.append(itemCheck);
    //'works' but looks weird 
    // maybe change to an array and then change the order
    playSound();

}

function createTodoItem(todoValue) {
    // create li
    let todoItem = document.createElement('li');
    todoItem.classList.add("list-group-item", "d-flex", "justify-content-between");

    // create text 
    let itemText = document.createElement('p');
    itemText.classList.add("m-0");
    itemText.textContent = todoValue;

    // create input
    let itemInput = document.createElement('input');
      itemInput.type = 'checkbox';

    // create button
    let itemBtn = document.createElement('button');
    itemBtn.innerText = 'Delete';
    itemBtn.classList.add("itemDeleteBtn", "btn", "btn-danger", "btn-sm");

    // append to the list Item
    todoItem.appendChild(itemInput);
    todoItem.appendChild(itemText);
    todoItem.appendChild(itemBtn);

    // append item to the to do list
    todoList.appendChild(todoItem);
    
}

function testBtnDelete() {
    // works to delete item
    // but nee to be called after create the items
    let arrayDeleteBtn = document.querySelectorAll(".itemDeleteBtn");
    console.log(arrayDeleteBtn);
    arrayDeleteBtn.forEach(btn => {
        btn.addEventListener('click', e => {
            e.target.parentElement.remove();
            // console.log("boo");
        });
    });
}

function playSound() {
    const audio = document.getElementById('soundBell');
    // set the audio to star from begin
    audio.currentTime = 0;
    audio.play();
}

