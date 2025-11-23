const todolist = [
  {
    name: "Sample Task 1",
    date: "2023-10-01"
  },
  {
    name: "Sample Task 2",
    date: "2023-10-02"
  }
];

renderToDoLsit();

function renderToDoLsit(){
  let todolistHtml = "";

  todolist.forEach((todoObject, index) => {

    const {name, date} = todoObject;
    const html = `
      <div>${name}</div>
      <div>${date}</div>
      <button class="js-todo-delete js-delete-button">
        Delete
      </button>`;
    todolistHtml += html;
  });

  document.querySelector(".js-todo-list").innerHTML = todolistHtml;

  document.querySelectorAll(".js-delete-button")
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => {
        todolist.splice(index, 1);
        renderToDoLsit();
      });
    });
}

document.querySelector(".js-add-todo-button")
  .addEventListener("click", ()=> {
    addData();
  });

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


