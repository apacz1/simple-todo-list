import { currentList, listArr } from "./addlist";
import { clickOutside } from "../main";

export type Item = {
  title?: string;
  date?: string;
  priority?: string;
};

export type todoList = { listName: string; data: Item[] };

export function createTask(arr: Array<todoList>) {
  const tasksContainer = document.querySelector(".tasks-container");
  tasksContainer!.innerHTML = "";
  if (listArr[currentList.index].data.length == 0) return;
  const taskLegendContainer = document.createElement("div");
  const titleLegend = document.createElement("div");
  const dateLegend = document.createElement("div");
  const prioLegend = document.createElement("div");

  taskLegendContainer.className = "task-legend-container";
  titleLegend.className = "title-legend";
  dateLegend.className = "date-legend";
  prioLegend.className = "prio-legend";

  titleLegend.textContent = "TASK TITLE";
  dateLegend.textContent = "DUE DATE";
  prioLegend.textContent = "PRIORITY";

  taskLegendContainer.appendChild(titleLegend);
  taskLegendContainer.appendChild(dateLegend);
  taskLegendContainer.appendChild(prioLegend);
  tasksContainer?.appendChild(taskLegendContainer);
  clickOutside();

  arr.forEach((x) => {
    const index = arr.indexOf(x);
    if (index == currentList.index) {
      arr[currentList.index].data.forEach((y) => {
        const taskContainer = document.createElement("div");
        const titleText = document.createElement("div");
        const dateText = document.createElement("div");
        const prioText = document.createElement("div");
        const removeBtn = document.createElement("div");

        titleText.className = "title-text";
        dateText.className = "date-text";
        prioText.className = "prio-text";
        removeBtn.className = "removebtn";
        taskContainer.className = "task-container";

        titleText.textContent = y.title!;
        dateText.textContent = y.date!;
        prioText.textContent = y.priority!;

        taskContainer!.appendChild(titleText);
        taskContainer!.appendChild(dateText);
        taskContainer!.appendChild(prioText);
        taskContainer!.appendChild(removeBtn);
        tasksContainer?.appendChild(taskContainer);
        clickOutside();
      });
    }
  });
}
