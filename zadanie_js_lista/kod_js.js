
function createTodoLiElement(todo) {

    let ul = document.querySelector('ul.list-group')
    let li = document.createElement('li')

    let diff = differenceDate(todo.stop_date)
    console.info(diff);
    if (diff < 0) {
        li.classList.add('border', 'border-danger')
    } else if (diff < 6) {
        li.classList.add('border', 'border-warning')
    }

    let divRow = document.createElement('div')
    divRow.classList.add('row');

    let divStatus = document.createElement('div')
    divStatus.classList.add('col-2')

    let badge = document.createElement('span')
    badge.classList.add('badge')
    if (todo.status == todoStatus.active) {
        badge.classList.add('bg-primary')
    }
    if (todo.status == todoStatus.reject) {
        badge.classList.add('bg-danger')
    }
    if (todo.status == todoStatus.done) {
        badge.classList.add('bg-success')
    }

    badge.innerHTML = todo.status
    divStatus.appendChild(badge);

    let divTitle = document.createElement('div')
    divTitle.classList.add('col-6')
    divTitle.innerHTML = todo.title



    let divDate = document.createElement('div')
    divDate.classList.add('col-2')
    divDate.innerHTML = formatDate(todo.stop_date)

    let divTools = document.createElement('div')
    divTools.classList.add('col-2')
    
    let buttonDelete = document.createElement('i')
    buttonDelete.classList.add('bi','bi-trash') 
    buttonDelete.addEventListener('click',function() {
        li.remove()
    });


    divTools.appendChild(buttonDelete)

    divRow.appendChild(divStatus)
    divRow.appendChild(divTitle);
    divRow.appendChild(divDate);
    divRow.appendChild(divTools);

    li.appendChild(divRow);
    li.classList.add('list-group-item')

    ul.appendChild(li)


}

function createTodoList() {
    document.querySelector('ul.list-group').innerHTML = '';
    listTodo.forEach((todo) => {
        createTodoLiElement(todo);
    })
}
createTodoList()

function formatDate(date) {

    let day = date.getDate();
    let month = (date.getMonth() + 1);
    let year = date.getFullYear();

    return year + '-' + (month) + '-' + day;

}

function differenceDate(date) {
    let dateNow = new Date();
    // console.info(dateNow,date);
    let difference = date.getTime() - dateNow.getTime();
    return Math.round(difference / 1000 / 60 / 60 / 24);
}

//dodac event listner na wysyłanie formularza i pobrac dane
let form = document.getElementById('form')
console.info(form);

form.addEventListener('submit', function (e) {
    e.preventDefault()
    let nameInput = document.querySelector('[name="title"]').value
    let stopDateInput = document.querySelector('[name="stop_date"]').value
    let statusInput = document.querySelector('[name="status"]').value
    
    let obj = {
        title: nameInput,
        stop_date: new Date(stopDateInput),
        status: statusInput,
        prior: 1
    }

    listTodo.push(obj)
    createTodoList()

})



