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

// functions
function checkingUser() {
  if (
    loginUsernameInput.value === localStorage.getItem("username") &&
    loginPasswordInput.value === localStorage.getItem("password")
  ) {
    console.log(newsFeed);
  } else {
    alert("Wrong username or password. Try again");
  }
}

console.log(signupSignupButton);

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

// login section
loginLoginButton.addEventListener("click", function (e) {
  e.preventDefault();

  alert("hello");

  // checkingUser();
});

loginClearButton.addEventListener("click", function (e) {
  e.preventDefault();

  loginUsernameInput.value = "";
  loginPasswordInput.value = "";
});
