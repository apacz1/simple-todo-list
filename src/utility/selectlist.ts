import { removeActive } from "../main";
import { listArr } from "./addlist";
import { currentList } from "./addlist";
import { createTask } from "./createitem";

export function selectList(e: Event) {
  const clickedListItem = e.currentTarget as HTMLUListElement;

  removeActive();

  const clickedListItemParent = clickedListItem.parentElement;

  console.log(clickedListItemParent);

  if (clickedListItemParent) {
    const children = clickedListItemParent.children;
    clickedListItemParent.classList.add("active");
    for (let i = 0; i < children.length; i++) {
      children[i].classList.add("active");
    }
  }

  const clickedValue = (e.currentTarget as HTMLUListElement).innerText;

  listArr.forEach((x) => {
    if (x.listName == clickedValue) {
      currentList.index = listArr.indexOf(x);
      createTask(listArr);
    }
  });
}
