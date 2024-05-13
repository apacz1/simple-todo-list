export function addItems() {
  const popup = document.querySelector(".popup");
  const cancelBtn = document.querySelector(".cancelbtn");
  const inputs = document.querySelector(".inputs-container");

  popup?.classList.toggle("show");

  cancelBtn?.addEventListener("click", () => {
    popup?.classList.remove("show");
    inputs?.querySelectorAll("input").forEach((element) => {
      element.value = "";
    });
  });

  const saveBtn = document.querySelector(".savebtn");
  saveBtn?.addEventListener("click", () => {});
}
