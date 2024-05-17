import { removeList } from "./removelist";
import { todoList } from "./createitem";
import { selectList } from "./selectlist";
import { addItems } from "./additems";
import { clickOutside } from "../main";
import { removeActive } from "../main";

export const listArr: todoList[] = [{ listName: "Default", data: [] }];
export let currentList = { index: 0 };
const tasksContainer = document.querySelector(".tasks-container");

listArr.forEach((element) => {
  const listItem = document.createElement("ul");
  const listeItemCont = document.createElement("div");
  const removeBtn = document.createElement("button");
  const listCont = document.querySelector(".list-container");

  listItem.className = "list-item";
  listeItemCont.className = "list-items-container";
  removeBtn.className = "removebtn";

  listItem.textContent = element.listName;

  listeItemCont.appendChild(listItem);
  listeItemCont.appendChild(removeBtn);
  listCont?.appendChild(listeItemCont);
  listItem.addEventListener("click", selectList);
  removeBtn?.addEventListener("click", removeList);

  listeItemCont.classList.add("active");
  listItem.classList.add("active");
  removeBtn.classList.add("active");

  tasksContainer!.innerHTML = "";
});

export function newList() {
  const listItem = document.createElement("ul");
  const listeItemCont = document.createElement("div");
  const removeBtn = document.createElement("button");
  let listValue = (document.querySelector("#list-input") as HTMLInputElement)
    .value;
  const listCont = document.querySelector(".list-container");
  const app = document.querySelector("#app");

  listItem.className = "list-item";
  listeItemCont.className = "list-items-container";
  removeBtn.className = "removebtn";

  removeActive();

  if (!listArr.length) {
    app!.innerHTML = `<button class="addtask">
        <i class="plus-icon"></i>
        Add task
      </button>
      <div class="tasks-container"></div>`;
    app?.classList.remove("flex");
    const addTaskBtn = document.querySelector(".addtask");
    addTaskBtn?.addEventListener("click", addItems);
    clickOutside();
  }

  if (listValue.length < 3 || listValue.length > 16) {
    alert("List name needs to be between 3 and 16 characters.");
    return;
  } else {
    listItem.textContent = listValue;
    listArr.push({ listName: listValue, data: [] });
    currentList.index = listArr.length - 1;

    listeItemCont.appendChild(listItem);
    listeItemCont.appendChild(removeBtn);
    listCont?.appendChild(listeItemCont);
    listItem.addEventListener("click", selectList);
    removeBtn?.addEventListener("click", removeList);

    listeItemCont.classList.add("active");
    listItem.classList.add("active");
    removeBtn.classList.add("active");
  }

  tasksContainer!.innerHTML = "";

  (document.querySelector("#list-input") as HTMLInputElement).value = "";
}
