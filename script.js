//
const button = document.getElementById("myButton");

button.addEventListener("click", () => {
  alert("Hello World!");
});
//2
const randomNumber = Math.floor(Math.random() * 100) + 1;
const checkGuess = () => {
  const guess = parseInt(document.getElementById("guessField").value);

  if (guess === randomNumber) {
    document.getElementById("guessResult").textContent =
      "Вітаємо! Ви вгадали число!";
  } else if (guess < randomNumber) {
    document.getElementById("guessResult").textContent =
      "Ваше число занадто маленьке. Спробуйте ще раз.";
  } else {
    document.getElementById("guessResult").textContent =
      "Ваше число занадто велике. Спробуйте ще раз.";
  }
};

//4
const applyCallbackToEachElement = (arr, callback) => {
  return arr.map(callback);
};

const arr = [1, 2, 3, 4, 5];
const squareCallback = (num) => num * num;

const result = applyCallbackToEachElement(arr, squareCallback);
console.log(result);
//5

const calculateDiscountedPrice = (price, discountPercentage, callback) => {
  const discountAmount = price * (discountPercentage / 100);
  const discountedPrice = price - discountAmount;
  callback(discountedPrice);
};

const showDiscountedPrice = (discountedPrice) => {
  console.log(`Discounted price: ${discountedPrice}`);
};

calculateDiscountedPrice(100, 10, showDiscountedPrice);
