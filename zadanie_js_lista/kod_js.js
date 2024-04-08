function creat_li(todo){
    let ul = document.querySelector("ul.list-group")
    let li = document.createElement('li')
    ul.appendChild(li)
    li.classList.add("list-group-item")
    li.innerHTML=todo
    console.info(ul)
}
listTodo.forEach(todo => {
   console.info(todo) 
   creat_li(todo.title+"->"+todo.start_date+"->"+todo.status+"->"+todo.prior)
});

creat_li()
