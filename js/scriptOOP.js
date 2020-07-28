// ----------------------- Classes -----------------------//

// Item class to be instanciated:
class Item {
    constructor(name, time) {
        this.name = name;
        // this.time = time;
    }
}

// This class control the user interface, the visual and functionality of the list
class UI {
  
    static displayItems() {
        const items = Store.getItems();
        items.forEach((item) => UI.addItemToList(item));
    }

    static addItemToList(item) {
        // create li
        let todoItem = document.createElement('li');
        todoItem.classList.add("list-group-item", "d-flex", "justify-content-between");

        // create text 
        let itemText = document.createElement('p');
        itemText.classList.add("m-0");
        // itemText.textContent = todoValue;
        itemText.textContent = item.name;

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

    static deleteItem(el) {
        if (el.classList.contains('itemDeleteBtn')) {
            el.parentElement.remove();
        }
    }

    static checkItem(el) {
        // weird but works
        let li = el.parentElement;
        li.classList.toggle("itemChecked");
        li.parentElement.append(li);

    }
    static playSound() {
        const audio = document.getElementById('soundBell');
        // set the audio to star from begin
        audio.currentTime = 0;
        audio.play();
    }

    static clearFields() {
        todoInput.value = '';

    }

}

// store class
class Store {

    static getItems() {
        let items;
        //localStorege.getItem to get things from local
        if (localStorage.getItem('items') === null) {
            items = [];
        } else {
            //local storage store as a string. so we need to parse
            items = JSON.parse(localStorage.getItem('items'));
        }
        return items;
    }
    static addItem(item) {
        const items = Store.getItems();
        items.push(item);
        //stringiy to be able to add to local storage
        localStorage.setItem('items', JSON.stringify(items));
    }

    static removeItem(name) {
        const items = Store.getItems();

        //iterate thu list to find and delete the right one
        items.forEach((item, index) => {
            if (item.name === name) {
                //remove one item from the list
                items.splice(index, 1);
            }
        });
        //add the new array of items to the the local storage
        localStorage.setItem('items', JSON.stringify(items));

    }
}

// ----------------------- Declararions  -----------------------//
// Declaration 
const todoBtn = document.getElementById('todoBtn');
const todoList = document.getElementById('todoList');


// ----------------------- Events  -----------------------//

//Event: First event called to update the list from the local storage
document.addEventListener('DOMContentLoaded', UI.displayItems);

// Events on the button to add items
todoBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    // get name of tudo item
    let todoValue = document.getElementById('todoInput').value;

    //instanciate a item
    const item = new Item(todoValue);

    //add item to UI (create)
    UI.addItemToList(item);
    //add to store
    Store.addItem(item);

});

//Event on the List to call: remove item and checkbox
todoList.addEventListener('click', (e) => {

    if (e.target.nodeName == "BUTTON") {
        UI.deleteItem(e.target);
        Store.removeItem(e.target.previousElementSibling.textContent);
    }
    if (e.target.nodeName == "INPUT") {
        UI.checkItem(e.target);
        UI.plTaySound();
        Store.removeItem(e.target.nextElementSibling.textContent);

    }

});
