const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", () => {
  const inputLength = Number(inputEl.dataset.length);
  const inputText = inputEl.value;

  if (inputText.length === inputLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
});
