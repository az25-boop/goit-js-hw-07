function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsRef = document.querySelector("#controls");
const inputRef = controlsRef.querySelector("input");
const createBtnRef = controlsRef.querySelector("[data-create]");
const destroyBtnRef = controlsRef.querySelector("[data-destroy]");
const boxesRef = document.querySelector("#boxes");

createBtnRef.addEventListener("click", () => {
  const amount = Number(inputRef.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert("Введіть число від 1 до 100");
  }
});

destroyBtnRef.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let size = 30;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(div);
    size += 10;
  }
  boxesRef.innerHTML = "";
  boxesRef.appendChild(fragment);
}

function destroyBoxes() {
  boxesRef.innerHTML = "";
  inputRef.value = "";
}
