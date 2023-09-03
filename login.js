const loginUsernameInput = document.querySelector("#login-username-input");
const loginPasswordInput = document.querySelector("#login-password-input");
let loginLoginButton = document.querySelector("#login-login-button");
let loginClearButton = document.querySelector("#login-clear-button");
const createAccountButotn = document.querySelector("#create-account");
let passwordStrength = document.querySelector("#password-strength");
let viewPasswordButton = document.querySelector("#view-password");

// functions

function capitalizingFirstLetter() {
  let strign = localStorage.getItem("username");
  let result = strign.charAt(0).toUpperCase() + strign.slice(1);

  return result;
}

function checkingUser() {
  if (
    loginUsernameInput.value === localStorage.getItem("username") &&
    loginPasswordInput.value === localStorage.getItem("password")
  ) {
    alert(`Hello ${capitalizingFirstLetter()}, Welcome.`);
    window.location.href = "final.html";
  } else {
    alert("Sorry wrong username or password. Try again");
  }
}

loginLoginButton.addEventListener("click", function (e) {
  e.preventDefault();
  checkingUser();
});

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    checkingUser();
  }
});

loginClearButton.addEventListener("click", function (e) {
  e.preventDefault();

  loginUsernameInput.value = "";
  loginPasswordInput.value = "";
});

createAccountButotn.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "index.html";
});

viewPasswordButton.addEventListener("click", function (e) {
  e.preventDefault();

  if (loginPasswordInput.type === "password") {
    loginPasswordInput.type = "text";
  } else {
    loginPasswordInput.type = "password";
  }
});
