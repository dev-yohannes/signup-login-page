const loginUsernameInput = document.querySelector("#login-username-input");
const loginPasswordInput = document.querySelector("#login-password-input");
const loginLoginButton = document.querySelector("#login-login-button");
const loginClearButton = document.querySelector("#login-clear-button");
const createAccountButton = document.querySelector("#create-account");
const passwordStrength = document.querySelector("#password-strength");
const viewPasswordButton = document.querySelector("#view-password");
const showPasswordIcon = document.querySelector("#show-password");
const hidePasswordIcon = document.querySelector("#hide-password");

hidePasswordIcon.style.display = "none";

//

const capitalizingFirstLetter = () => {
  let strign = localStorage.getItem("username");
  let result = strign.charAt(0).toUpperCase() + strign.slice(1);
  return result;
};

const checkingUser = () => {
  if (
    loginUsernameInput.value === localStorage.getItem("username") &&
    loginPasswordInput.value === localStorage.getItem("password")
  ) {
    alert(`Hello ${capitalizingFirstLetter()}, Welcome.`);
    window.location.href = "final.html";
  } else {
    alert("Sorry wrong username or password. Try again");
  }
};

showPasswordIcon.addEventListener("click", () => {
  hidePasswordIcon.style.display = "block";
  showPasswordIcon.style.display = "none";
  loginPasswordInput.type = "text";
});

hidePasswordIcon.addEventListener("click", () => {
  hidePasswordIcon.style.display = "none";
  showPasswordIcon.style.display = "block";
  loginPasswordInput.type = "password";
});

loginLoginButton.addEventListener("click", (e) => {
  e.preventDefault();
  checkingUser();
});

document.addEventListener("keypress", (e) => {
  e.preventDefault();
  if (e.key === "Enter") {
    checkingUser();
  }
});

loginClearButton.addEventListener("click", (e) => {
  e.preventDefault();

  loginUsernameInput.value = "";
  loginPasswordInput.value = "";
});

createAccountButton.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "index.html";
});
