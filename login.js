const loginUsernameInput = document.querySelector("#login-username-input");
const loginPasswordInput = document.querySelector("#login-password-input");
let loginLoginButton = document.querySelector("#login-login-button");
let loginClearButton = document.querySelector("#login-clear-button");
const addedText = document.querySelector("#news-feed-output-text");
const createAccountButotn = document.querySelector("#create-account");

const newsFeed = [
  {
    username: "Andrie",
    timeline: "Hellooooo",
  },
];

// function
function checkingUser() {
  if (
    loginUsernameInput.value === localStorage.getItem("username") &&
    loginPasswordInput.value === localStorage.getItem("password")
  ) {
    addedText.innerHTML = newsFeed[0].username + ": " + newsFeed[0].timeline;
  } else {
    alert("Wrong username or password. Try again");
    createAccountButotn.classList.remove("remove-button");
  }
}

// login section
loginLoginButton.addEventListener("click", function (e) {
  e.preventDefault();

  checkingUser();
});

loginClearButton.addEventListener("click", function (e) {
  e.preventDefault();

  loginUsernameInput.value = "";
  loginPasswordInput.value = "";
  addedText.innerHTML = "";
});

createAccountButotn.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "signup.html";
});
