import { listArr } from "./addlist";
import { currentList } from "./addlist";
import { createTask } from "./createitem";

export function selectList(e: Event) {
  const clickedValue = (e.currentTarget as HTMLUListElement).innerText;

  listArr.forEach((x) => {
    if (x.listName == clickedValue) {
      currentList.index = listArr.indexOf(x);
      createTask(listArr);
    }
  });
}
