const todolist = [];

renderToDoLsit();

function renderToDoLsit(){
  let todolistHtml = "";

  for(let i = 0; i < todolist.length; i++) {
    const todoObject = todolist[i];
    //const name = todoObject.name;
    //const date = todoObject.date;
    const {name, date} = todoObject;
    const html = `
      <div>${name}</div>
      <div>${date}</div>
      <button onclick = "
        todolist.splice(${i}, 1);
        renderToDoLsit();"
        class="js-todo-delete">
        Delete
      </button>`;
    todolistHtml += html;
  }

  document.querySelector(".js-todo-list").innerHTML = todolistHtml;
}

function addData(){
  const inputElement = document.querySelector(".js-todo-input");

  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-todo-date");

  const date = dateInputElement.value;

  todolist.push({name, date});

  inputElement.value = "";
  dateInputElement.value = "";

  renderToDoLsit();
}


