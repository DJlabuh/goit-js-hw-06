const controls = document.querySelector("#controls");
const createBtn = controls.querySelector("[data-create]");
const destroyBtn = controls.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  const boxSize = 30;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i += 1) {
    const size = boxSize + i * 10;
    const div = document.createElement("div");
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};`;
    fragment.appendChild(div);
  }

  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

createBtn.addEventListener("click", () => {
  const amount = Number(controls.querySelector("input").value);
  createBoxes(amount);
});

destroyBtn.addEventListener("click", destroyBoxes);