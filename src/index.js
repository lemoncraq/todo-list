import "./style.css";

const addButton = document.querySelector(".add-button");
const newElement = document.querySelector(".input");
const deleteBtns = document.getElementsByClassName("delete-btn");
addButton.addEventListener("click", () => {
  let li = document.createElement("li");
  let text = document.createTextNode(newElement.value);
  li.appendChild(text);
  li.classList.add("list__el");
  document.querySelector(".list").appendChild(li);
  newElement.value = "";
  let btn = document.createElement("BUTTON");
  let textBtn = document.createTextNode("\u00D7");
  btn.appendChild(textBtn);
  btn.classList.add("delete-btn");
  li.appendChild(btn);
  for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].onclick = function () {
      this.parentElement.remove();
    };
  }
});

const listTodos = document.querySelector("ul");
listTodos.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  }
});

const todosNodeList = document.getElementsByClassName("list__el");

for (let i = 0; i < todosNodeList.length; i++) {
  let btn = document.createElement("BUTTON");
  let text = document.createTextNode("\u00D7");
  btn.appendChild(text);
  btn.classList.add("delete-btn");
  todosNodeList[i].appendChild(btn);
}

for (let i = 0; i < deleteBtns.length; i++) {
  deleteBtns[i].onclick = function () {
    this.parentElement.remove();
  };
}
