import { newList } from "./utility/addlist";
import { removeList } from "./utility/removelist";

const addBtn = document.querySelector(".addbtn");
const removeBtn = document.querySelector(".removebtn");

addBtn?.addEventListener("click", newList);
removeBtn?.addEventListener("click", removeList);
