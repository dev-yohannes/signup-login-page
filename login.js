const loginUsernameInput = document.querySelector("#login-username-input");
const loginPasswordInput = document.querySelector("#login-password-input");
let loginLoginButton = document.querySelector("#login-login-button");
let loginClearButton = document.querySelector("#login-clear-button");
// const addedText = document.querySelector("#news-feed-output-text");
const createAccountButotn = document.querySelector("#create-account");
let passwordStrength = document.querySelector("#password-strength");

const newsFeed = [
  {
    username: "Andrie",
    timeline: "Hellooooo",
  },
];

function capitalizingFirstLetter() {
  let strign = localStorage.getItem("username");
  let result = strign.charAt(0).toUpperCase() + strign.slice(1);

  return result;
}

// function
function checkingUser() {
  if (
    loginUsernameInput.value === localStorage.getItem("username") &&
    loginPasswordInput.value === localStorage.getItem("password")
  ) {
    alert(`Hello ${capitalizingFirstLetter()}, Welcome.`);

    // addedText.innerHTML = newsFeed[0].username + ": " + newsFeed[0].timeline;
    window.location.href = "final.html";

    // createAccountButotn.classList.add("remove-button");
  } else {
    alert("Sorry wrong username or password. Try again");
    // createAccountButotn.classList.remove("remove-button");
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
  // addedText.innerHTML = "";
  // createAccountButotn.classList.add("remove-button");
});

createAccountButotn.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "index.html";
});
