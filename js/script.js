// I would love feedback on best practices, I didnt follow any tutorial and I fellt the cody is messy


let todoBtn = document.getElementById('todoBtn');
todoBtn.addEventListener('click', addTodo);

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


// let listOfItens = document.querySelectorAll('.itemClass');
// const itemCheck = document.querySelector('#todoList');

todoList.addEventListener('change', (event) => {
    // not ideal,refactor later
    // let itemText = event.target.nextElementSibling;
    let itemCheck = event.target.parentElement;
    itemCheck.classList.toggle("itemChecked");
    // change order of the list, I would think about using CSS flexbox to it. is it bad practice?
    // but it is JS class right lol 

    let list = itemCheck.parentElement;
    list.append(itemCheck);
    //'works' but looks weird to me lol 
    // maybe change to an array and then change the order

    playSound();

});

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
    // itemInput.classList.add("form-check-input");

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

function playSound() {
    const audio = document.getElementById('soundBell');
    audio.currentTime = 0; // set the audio to star from begin
    audio.play();
}