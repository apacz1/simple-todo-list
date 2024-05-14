import { listArr } from "./addlist";
import { currentList } from "./addlist";

export function removeList(e: Event) {
  const removeBtn = e.currentTarget;
  const listElement = (removeBtn as HTMLElement).parentElement?.querySelector(
    "ul"
  );
  const app = document.querySelector("#app");
  let listElementText = listElement?.textContent;

  for (let i = 0; i < listArr.length; i++) {
    if (listArr[i].listName == listElementText) {
      listArr.splice(i, 1);
    }
  }
  currentList.index = 0;

  (removeBtn as HTMLElement).parentElement?.remove();

  if (listArr.length) return;

  app!.innerHTML =
    '<div class="no-list">Please start by creating a list!</div>';
  app?.classList.add("flex");
}
