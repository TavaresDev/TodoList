// I didn't follow any tutorial and spent some time trying to organize the code, but still looks messy
// Was trying to make small functions to separate concerns and be readable.
// Im using bootstrap 4 just for lil better visual and responsiveness .
// I would love feedback and best practices tips.

// Declaration
const todoBtn = document.getElementById('todoBtn');
const todoList = document.getElementById('todoList');


// Events 
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('change', checkItem);


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

function addTodo() {
    let todoInput = document.getElementById('todoInput');
    let todoValue = todoInput.value;

    createTodoItem(todoValue);
    // move to when click the inputbox
    // todoInput.value = '';
    testBtnDelete();

}

function createTodoItem(todoValue) {
    // create li
    let todoItem = document.createElement('li');
    // todoItem.classList.add("itemClass")
    todoItem.classList.add("list-group-item", "d-flex", "justify-content-between");

    // create text In spam
    let itemText = document.createElement('p');
    // add value to spam
    itemText.classList.add("m-0");
    itemText.textContent = todoValue;

    // create input
    let itemInput = document.createElement('input');
    // add type
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
    // console.log(todoList);
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


