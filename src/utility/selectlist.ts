import { listArr } from "./addlist";
import { currentList } from "./addlist";

export function selectList(e: Event) {
  const clickedValue = (e.currentTarget as HTMLUListElement).innerText;

  listArr.map((x) => {
    if (x.listName == clickedValue) {
      currentList.index = listArr.indexOf(x);
    }
  });
}
