
function createTodoLiElement(todo) {

    let ul = document.querySelector('ul.list-group')
    let li = document.createElement('li')

    let diff = differenceDate(todo.stop_date)
    //console.info(diff);
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
        //alert('aaa');
        let index=listTodo.indexOf(todo)
        listTodo.splice(index,1) 
        createTodoList()
    });

    let buttonEdit = document.createElement('i')
    buttonEdit.classList.add('bi','bi-pencil') 
    buttonEdit.addEventListener('click', function () {
        let nameInput2 = document.querySelector('[name="title"]');
        let stopDateInput2 = document.querySelector('[name="stop_date"]');
        let statusInput2 = document.querySelector('[name="status"]');
        let idInput2=document.querySelector('[name="id"]')
      
        nameInput2.value = todo.title;
        stopDateInput2.value = formatDate(todo.stop_date);
        statusInput2.value = todo.status;
        idInput2.value=todo.id
    
        console.info(nameInput2.value);
        console.info(stopDateInput2.value);
        console.info(statusInput2.value);
        console.info(idInput2.value)
    });
    

    divTools.appendChild(buttonDelete)
    divTools.appendChild(buttonEdit)

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
   
    return year + '-' + String(month).padStart(2,"0") + '-' + String(day).padStart(2,"0");

}

function differenceDate(date) {
    let dateNow = new Date();
    // console.info(dateNow,date);
    let difference = date.getTime() - dateNow.getTime();
    return Math.round(difference / 1000 / 60 / 60 / 24);
}

//dodac event listner na wysyłanie formularza i pobrac dane
let form = document.getElementById('form')
//console.info(form);

form.addEventListener('submit', function (e) {
    e.preventDefault()
    let nameInput = document.querySelector('[name="title"]').value
    let stopDateInput = document.querySelector('[name="stop_date"]').value
    let statusInput = document.querySelector('[name="status"]').value
    let idInput=document.querySelector('[name="id"]').value
    console.info(nameInput)
    console.info(stopDateInput)
    console.info(statusInput)
    console.info(idInput)
    let obj = {
        id: listTodo.length+1,
        title: nameInput,
        stop_date: new Date(stopDateInput),
        status: statusInput,
        prior: 1
    }
    if(idInput==''){
        listTodo.push(obj)
    }else{
        
        listTodo.forEach(elem=>{
            console.info(elem)
            if(elem.id == idInput){
                elem.title=nameInput
                elem.stop_date=new Date(stopDateInput)
                elem.status=statusInput
            }
        })
    }
  
    nameInput=""
    stopDateInput=""
    statusInput=""
    idInput=""
    createTodoList()
    
})
