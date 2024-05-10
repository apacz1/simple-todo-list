import { addItems } from "./utility/additems";
import { newList } from "./utility/addlist";
import { removeList } from "./utility/removelist";
import { selectList } from "./utility/selectlist";

const addBtn = document.querySelector(".addbtn");
const removeBtn = document.querySelector(".removebtn");
const listItem = document.querySelector(".list-item");
const addTaskBtn = document.querySelector(".addtask");
const popup = document.querySelector(".popup");

addBtn?.addEventListener("click", newList);
removeBtn?.addEventListener("click", removeList);
listItem?.addEventListener("click", selectList);
addTaskBtn?.addEventListener("click", addItems);

document.body.addEventListener("click", (e: any) => {
  let clickInside = popup?.contains(e.target);
  let insideButton = addTaskBtn?.contains(e.target);
  if (!clickInside && !insideButton) {
    popup?.classList.remove("show");
  }
});
