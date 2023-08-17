const signupUsernameInput = document.querySelector("#signup-username-input");
const signupPasswordInput = document.querySelector("#signup-password-input");
let signupSignupButton = document.querySelector("#signup-signup-button");
let signupClearButton = document.querySelector("#signup-clear-button");

// function
function signupConditional() {
  if (signupUsernameInput.value === "" || signupPasswordInput.value === "") {
    alert("You need to fill the inputs.");
  } else {
    window.location.href = "login.html";
    localStorage.setItem("username", signupUsernameInput.value);
    localStorage.setItem("password", signupPasswordInput.value);
  }
}

signupSignupButton.addEventListener("click", function (e) {
  e.preventDefault();
  signupConditional();
});

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    signupConditional();
  }
});

signupClearButton.addEventListener("click", function (e) {
  e.preventDefault();

  signupUsernameInput.value = "";
  signupPasswordInput.value = "";
});
