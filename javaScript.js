document.querySelector("button").addEventListener("click", function () {
  const email = document.querySelector("input[type='email']");
  const emailInput = document.querySelector("input");
  const errorMessage = document.querySelector(".errorMessage");
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === "") {
    event.preventDefault();
    errorMessage.style.display = "block";
    emailInput.classList.add("error-border");
  } else if (!email.value.match(pattern)) {
    errorMessage.style.display = "block";
    emailInput.classList.add("error-border");
  } else {
    errorMessage.style.display = "none";
  }
});

document
  .querySelector(".early-access-form button")
  .addEventListener("click", function (event) {
    const parentDiv = document.querySelector(".early-access-form");
    const email = parentDiv.querySelector("input[type='email']");
    const emailInput = document.querySelector(".early-input");
    const errorMessage = parentDiv.querySelector(".errorMessage");
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
      event.preventDefault();
      errorMessage.style.display = "block";
      emailInput.classList.add("error-border");
    } else if (!email.value.match(pattern)) {
      event.preventDefault();
      errorMessage.style.display = "block";
      emailInput.classList.add("error-border");
    } else {
      errorMessage.style.display = "none";
    }
  });
