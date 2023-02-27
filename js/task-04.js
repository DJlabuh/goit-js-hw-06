let value = 0;

const counterValue = document.querySelector("#value");
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

const handleDecrementClick = () => {
  value -= 1;
  counterValue.textContent = value;
};

const handleIncrementClick = () => {
  value += 1;
  counterValue.textContent = value;
};

decrementButton.addEventListener("click", handleDecrementClick);
incrementButton.addEventListener("click", handleIncrementClick);
