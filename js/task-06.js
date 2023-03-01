const inputEl = document.querySelector("#validation-input");

function toggleClasses(element, classToAdd, classToRemove) {
  element.classList.add(classToAdd);
  element.classList.remove(classToRemove);
}

inputEl.addEventListener("blur", () => {
  const inputLength = Number(inputEl.dataset.length);
  const inputText = inputEl.value;

if (inputText.length === inputLength) {
  toggleClasses(inputEl, "valid", "invalid");
} else {
  toggleClasses(inputEl, "invalid", "valid");
}
});