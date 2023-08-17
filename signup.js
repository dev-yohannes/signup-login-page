const signupUsernameInput = document.querySelector("#signup-username-input");
const signupPasswordInput = document.querySelector("#signup-password-input");
let signupSignupButton = document.querySelector("#signup-signup-button");
let signupClearButton = document.querySelector("#signup-clear-button");

// signup section
signupSignupButton.addEventListener("click", function (e) {
  e.preventDefault();

  if (signupUsernameInput.value === "" || signupPasswordInput.value === "") {
    alert("You need to fill the inputs.");
  } else {
    window.location.href = "login.html";
    localStorage.setItem("username", signupUsernameInput.value);
    localStorage.setItem("password", signupPasswordInput.value);
  }
});

signupClearButton.addEventListener("click", function (e) {
  e.preventDefault();

  signupUsernameInput.value = "";
  signupPasswordInput.value = "";
});
