import { currentList } from "./addlist";

export type Item = {
  title?: string;
  date?: string;
  priority?: string;
};

export type todoList = { listName: string; data: Item[] };

export function createTask(arr: Array<todoList>) {
  const tasksContainer = document.querySelector(".tasks-container");
  tasksContainer!.innerHTML = "";

  arr.forEach((x) => {
    const index = arr.indexOf(x);
    if (index == currentList.index) {
      arr[currentList.index].data.forEach((y) => {
        const titleText = document.createElement("div");
        const dateText = document.createElement("div");
        const prioText = document.createElement("div");
        const removeBtn = document.createElement("div");

        titleText.className = "title-text";
        dateText.className = "date-text";
        prioText.className = "prio-text";
        removeBtn.className = "removebtn";

        titleText.textContent = y.title!;
        dateText.textContent = y.date!;
        prioText.textContent = y.priority!;

        tasksContainer!.appendChild(titleText);
        tasksContainer!.appendChild(dateText);
        tasksContainer!.appendChild(prioText);
        tasksContainer!.appendChild(removeBtn);
      });
    }
  });
}
