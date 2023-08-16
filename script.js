const signupUsernameInput = document.querySelector("#signup-username-input");
const signupPasswordInput = document.querySelector("#signup-password-input");
let signupSignupButton = document.querySelector("#signup-signup-button");
let signupClearButton = document.querySelector("#signup-clear-button");

const loginUsernameInput = document.querySelector("#login-username-input");
const loginPasswordInput = document.querySelector("#login-password-input");
let loginLoginButton = document.querySelector("#login-login-button");
let loginClearButton = document.querySelector("#login-clear-button");
const addedText = document.querySelector("#news-feed-output-text");

const newsFeed = [
  {
    username: "Andrie",
    timeline: "Hellooooo",
  },
];

signupSignupButton.addEventListener("click", function (e) {
  e.preventDefault();

  localStorage.setItem("username", signupUsernameInput.value);
  localStorage.setItem("password", signupPasswordInput.value);

  window.location.href = "login.html";
});
