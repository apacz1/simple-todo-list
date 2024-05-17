import { listArr } from "./addlist";
import { currentList } from "./addlist";

export function removeItem(e: Event) {
  const tasksContainer = document.querySelector(".tasks-container");
  const removeBtn = e.currentTarget;
  const task = (removeBtn as HTMLElement).parentElement?.querySelector(
    ".title-text"
  );
  const taskText = task?.textContent;
  const currentListData = listArr[currentList.index].data;

  for (let i = 0; i < currentListData.length; i++) {
    if (currentListData[i].title == taskText) {
      currentListData.splice(i, 1);
    }
  }

  (removeBtn as HTMLElement).parentElement?.remove();

  if (currentListData.length) return;

  tasksContainer!.innerHTML = "";
}
