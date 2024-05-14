import { listArr } from "./addlist";
import { currentList } from "./addlist";

export function addItems() {
  const popup = document.querySelector(".popup");
  const cancelBtn = document.querySelector(".cancelbtn");
  const inputs = document.querySelector(".inputs-container");
  const inputList = inputs!.querySelectorAll("input");
  const titleInput = document.querySelector("#title-input");
  const dateInput = document.querySelector("#date-input");
  const selectInput = document.querySelector("#item-priority");

  popup?.classList.toggle("show");

  cancelBtn?.addEventListener("click", () => {
    popup?.classList.remove("show");
    inputList.forEach((element) => {
      element.value = "";
    });
  });

  const saveBtn = document.querySelector(".savebtn");
  saveBtn?.addEventListener("click", () => {
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

    popup?.classList.remove("show");
    inputList.forEach((element) => {
      element.value = "";
    });
  });
}
