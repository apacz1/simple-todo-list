import { listArr } from "./addlist";

export function removeList(e: Event) {
  const removeBtn = e.currentTarget;
  const listElement = (removeBtn as HTMLElement).parentElement?.firstChild;
  let listElementText = listElement?.textContent;

  console.log((removeBtn as HTMLElement).parentElement);
  for (let i = 0; i < listArr.length; i++) {
    if (listArr[i].listName == listElementText) {
      listArr.splice(i, 1);
    }
  }
  console.log(removeBtn);
  console.log(listElement);
  console.log(listArr);
  console.log(listElementText);
  (removeBtn as HTMLElement).parentElement?.remove();
}
