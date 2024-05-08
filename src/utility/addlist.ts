import { removeList } from "./removelist";

export function newList() {
  const listItem = document.createElement("li");
  const listeItemCont = document.createElement("div");
  const removeBtn = document.createElement("button");
  let listValue = (document.querySelector("#list-input") as HTMLInputElement)
    .value;
  const listCont = document.querySelector(".list-container");

  listItem.className = "list-item";
  listeItemCont.className = "list-items-container";
  removeBtn.className = "removebtn";

  if (listValue.length < 3 || listValue.length > 16) {
    alert("List name needs to be between 3 and 16 characters.");
  } else {
    listItem.textContent = listValue;

    listeItemCont.appendChild(listItem);
    listeItemCont.appendChild(removeBtn);
    listCont?.appendChild(listeItemCont);
    removeBtn?.addEventListener("click", removeList);
  }

  (document.querySelector("#list-input") as HTMLInputElement).value = "";
}
