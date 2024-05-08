export function removeList(e: Event) {
  const removeBtn = e.currentTarget;
  (removeBtn as HTMLElement).parentElement?.remove();
}
