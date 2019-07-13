const btnSelectAll = document.getElementById('select_all');
const inputElem = document.getElementById('input');
const ulElem = document.getElementById('list');
const todoList = [];


inputElem.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
        todoList.push(inputElem.value);
        inputElem.value = '';
        createLi(todoList[todoList.length - 1]);
    };
});





function createLi(str) {
    const liElem = document.createElement('li');
    liElem.classList.add('list-group-item');
    ulElem.appendChild(liElem);
    const divElem = document.createElement('div');
    divElem.classList.add('form-group', 'form-check');
    liElem.appendChild(divElem);


    const checkElem = document.createElement('input');
    const labelElem = document.createElement('label');
    const btnDoneElem = document.createElement('button');
    const btnRemoveElem = document.createElement('button');

    checkElem.classList.add('form-check-input');
    labelElem.classList.add('form-check-label');
    btnDoneElem.classList.add('btn', 'btn-outline-primary');
    btnRemoveElem.classList.add('btn', 'btn-outline-danger');

    checkElem.type = 'checkbox';
    checkElem.id = `exampleCheck${todoList.length+1}`;
    labelElem.innerText = str;
    labelElem.setAttribute('for', checkElem.id);
    btnDoneElem.innerText = 'Done';
    btnRemoveElem.innerText = 'Remove';

    divElem.appendChild(checkElem);
    divElem.appendChild(labelElem);
    divElem.appendChild(btnDoneElem);
    divElem.appendChild(btnRemoveElem);

    btnDoneElem.addEventListener('click', function () {
        this.parentElement.children[1].classList.toggle('todoDone');
    })

    btnRemoveElem.addEventListener('click', function(e) {
        const potentialDiv = e.target.closest('.list-group-item');
        if (potentialDiv) {
            potentialDiv.parentElement.removeChild(potentialDiv);
        }
    })
};

function uncheck (options) {                                           
    let checks = document.querySelectorAll(options.selector);
    checks.forEach((elem) => {
        if (elem.checked) {
            elem.nextElementSibling.classList[options.method]('todoDone');
            elem.checked = false;
        }
    })
};



document.getElementById('doneAction').addEventListener('click', () => {
    uncheck({
        selector: ".form-check-input",
        method: "add"
    })
});

document.getElementById('restoreAction').addEventListener('click', () => {
    uncheck({
        selector: ".form-check-input",
        method: "remove"
    })
});

document.getElementById('removeAction').addEventListener('click', (e) => {
    const check = document.querySelectorAll('.form-check-input');
    check.forEach((elem) => {
        if (elem.checked) {
            removingItem = elem.closest('.list-group-item');
            removingItem.parentElement.removeChild(removingItem);
        }
    })   
})

document.getElementById('select_all').addEventListener('click', () => {
    const check = document.querySelectorAll('.form-check-input');
    check.forEach((elem) => {
        elem.checked = true;
    }) 
});
