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
        let index = listTodo.indexOf(todo)
        if(index > -1) {
            listTodo.splice(index,1);
        }
        createTodoList()
    });
 
 
    divTools.appendChild(buttonDelete)
 
 
    let buttonEdit = document.createElement('i')
    buttonEdit.classList.add('bi','bi-pencil')
    buttonEdit.addEventListener('click',function() {
      document.querySelector('[name=title]').value = todo.title;
      document.querySelector('[name=stop_date]').value = formatDate(todo.stop_date);
      document.querySelector('[name=status]').value = todo.status;
      document.querySelector('[name=id]').value = todo.id;
     
    });
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
 
    return year + '-' + String(month).padStart(2,'0') + '-' + String(day).padStart(2,'0');
 
}
 
function differenceDate(date) {
    let dateNow = new Date();
    // console.info(dateNow,date);
    let difference = date.getTime() - dateNow.getTime();
    return Math.round(difference / 1000 / 60 / 60 / 24);
}
<<<<<<< HEAD
let form_search= document.getElementById('form_search')
console.info(form_search);
 
form_search.addEventListener('submit',(a)=>{
    a.preventDefault()
    let name_Input_s = document.querySelector('[name="title_s"]').value
    let stop_Date_Input_s = document.querySelector('[name="stop_date_s"]').value
    let status_Input_s = document.querySelector('[name="status_s"]').value
 
    //alert("Hello")
    console.info(name_Input_s)
    console.info(new Date(stop_Date_Input_s))
    console.info(status_Input_s)
 
    listTodo.forEach(item=>{
        if(name_Input_s==item.title){
            console.info(item)
=======
let form_szukaj=document.getElementById("szukaj")

let searchbutton=document.getElementById("btn_szukaj")
let div_zanlezione=document.getElementById("znalezione")
searchbutton.addEventListener("click",()=>{
    //alert("aa")
    let name_s=document.querySelector(".nazwa-szukaj")
    let data_s=document.querySelector(".data-szukaj")
    let status_s=document.querySelector(".status-szukaj")
    let lista_zadan=document.querySelector(".list-group")
    let child_search=lista_zadan.childNodes
    
    console.info(name_s.value)
    console.info(new Date(data_s.value))
    console.info(status_s.value)
    //console.info(lista_zadan)
    child_search.forEach(elem=>{
        let child_search2=elem.childNodes
        //console.info(child_search2)
        child_search2.forEach(item=>{
            let child_search3=item.childNodes
            //console.info(child_search3)
            child_search3.forEach(elem2=>{
                console.info(elem2)
            })
        })
    })
 
    listTodo.forEach(item=>{
        if(name_s.value==item.title){
            name_s.value=item.title
            console.info(item)
          
>>>>>>> 986ccd20498427c1a7da9a5b9884bc6f4ab42f6c
        }
        if(status_Input_s==item.status){
            console.info(item)
<<<<<<< HEAD
=======
          
>>>>>>> 986ccd20498427c1a7da9a5b9884bc6f4ab42f6c
        }
        if(new Date(stop_Date_Input_s)==item.stop_date){
            console.info(item)
<<<<<<< HEAD
=======
            
>>>>>>> 986ccd20498427c1a7da9a5b9884bc6f4ab42f6c
        }
    })
   
})
   
//dodac event listner na wysyłanie formularza i pobrac dane
let form = document.getElementById('form')
console.info(form);
 
form.addEventListener('submit', function (e) {
    e.preventDefault()
    let nameInput = document.querySelector('[name="title"]').value
    let stopDateInput = document.querySelector('[name="stop_date"]').value
    let statusInput = document.querySelector('[name="status"]').value
    let idInput = document.querySelector('[name="id"]').value
   
   
 
 
    if(idInput == ''){
        let obj = {
            title: nameInput,
            stop_date: new Date(stopDateInput),
            status: statusInput,
            prior: 1,
            id: listTodo.length + 1
        }
        listTodo.push(obj)
    }else {
        listTodo.forEach((item) => {
            if(item.id == idInput) {
                item.title = nameInput
                item.stop_date = new Date(stopDateInput)
                item.status = statusInput
            }
        })
 
    }
    document.querySelector('[name=title]').value = '';
      document.querySelector('[name=stop_date]').value = '';
      document.querySelector('[name=status]').value = ''
      document.querySelector('[name=id]').value = ''
 
   
    createTodoList()
<<<<<<< HEAD
 
})
=======
    

})
>>>>>>> 986ccd20498427c1a7da9a5b9884bc6f4ab42f6c
