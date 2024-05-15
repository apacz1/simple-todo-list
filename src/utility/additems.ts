import { listArr } from "./addlist";
import { currentList } from "./addlist";
import { createTask } from "./createitem";

export function addItems() {
  popup?.classList.toggle("show");
}

const inputs = document.querySelector(".inputs-container");
const inputList = inputs!.querySelectorAll("input");
const titleInput = document.querySelector("#title-input");
const dateInput = document.querySelector("#date-input");
const selectInput = document.querySelector("#item-priority");
const popup = document.querySelector(".popup");

export function cancelItems() {
  popup?.classList.remove("show");
  inputList.forEach((element) => {
    (element as HTMLInputElement).value = "";
  });
}

export function saveItems() {
  const titleInputVal = (titleInput as HTMLInputElement).value;
  const dateInputVal = (dateInput as HTMLInputElement).value;
  const selectInputVal = (selectInput as HTMLSelectElement).value;

  if (titleInputVal == "" && dateInputVal == "") {
    alert("Fill all the fields.");
    return;
  }

  listArr[currentList.index].data.push({
    title: titleInputVal,
    date: dateInputVal,
    priority: selectInputVal,
  });

  createTask(listArr);

  popup?.classList.remove("show");
  inputList.forEach((element) => {
    (element as HTMLInputElement).value = "";
  });
}
