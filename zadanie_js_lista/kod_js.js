function creat_li(todo) {
    let ul = document.querySelector("ul.list-group");
    let li = document.createElement('li');
    
    let divrow = document.createElement("div");
    divrow.classList.add("row");
   
    let divstatus = document.createElement("div");
    divstatus.classList.add("col-2");
 
    let badge = document.createElement("span");
    badge.classList.add("badge");
    badge.classList.add("badge-primary");
    if(todo.status=='active'){
        badge.style.backgroundColor="green";
    }else{
        badge.style.backgroundColor="red";
    }
    badge.innerHTML = todo.status;
   
    let divtitle = document.createElement("div");
    divtitle.classList.add("col-7");
    divtitle.innerHTML = todo.title;
   
    let divdate = document.createElement("div");
    divdate.classList.add("col-3");
    divdate.innerHTML = todo.start_date;
   
    divstatus.appendChild(badge);
    divrow.appendChild(divtitle);
    divrow.appendChild(divdate);
    divrow.appendChild(divstatus);
   
    li.classList.add("list-group-item");
    li.appendChild(divrow);
   
    ul.appendChild(li);
}

listTodo.forEach(todo => {
   
   creat_li(todo)
});
 
creat_li()