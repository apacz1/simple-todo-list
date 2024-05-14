import { removeList } from "./removelist";
import { todoList } from "./createitem";
import { selectList } from "./selectlist";
import { addItems } from "./additems";

export const listArr: todoList[] = [{ listName: "Default", data: [] }];
export let currentList = { index: 0 };

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
});

export function newList() {
  const listItem = document.createElement("ul");
  const listeItemCont = document.createElement("div");
  const removeBtn = document.createElement("button");
  let listValue = (document.querySelector("#list-input") as HTMLInputElement)
    .value;
  const listCont = document.querySelector(".list-container");
  const app = document.querySelector("#app");
  const addTaskBtn = document.querySelector(".addtask");

  listItem.className = "list-item";
  listeItemCont.className = "list-items-container";
  removeBtn.className = "removebtn";

  if (!listArr.length) {
    app!.innerHTML = `<div class="items-container"></div>
      <button class="addtask">
        <i class="plus-icon"></i>
        Add task
      </button>`;
    app?.classList.remove("flex");
  }

  if (listValue.length < 3 || listValue.length > 16) {
    alert("List name needs to be between 3 and 16 characters.");
  } else {
    listItem.textContent = listValue;
    listArr.push({ listName: listValue, data: [] });
    currentList.index = listArr.length - 1;
    console.log(listArr);

    listeItemCont.appendChild(listItem);
    listeItemCont.appendChild(removeBtn);
    listCont?.appendChild(listeItemCont);
    listeItemCont.addEventListener("click", selectList);
    removeBtn?.addEventListener("click", removeList);
    addTaskBtn?.addEventListener("click", addItems);
  }

  (document.querySelector("#list-input") as HTMLInputElement).value = "";
}
