const signupUsernameInput = document.querySelector("#signup-username-input");
const signupPasswordInput = document.querySelector("#signup-password-input");
let signupSignupButton = document.querySelector("#signup-signup-button");
let signupClearButton = document.querySelector("#signup-clear-button");
let passwordStrength = document.querySelector("#password-strength");

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

function passwordStrengthChecker() {
  if (signupPasswordInput.length > 3) {
    passwordStrength.innerHTML = "Weak";
    console.log("weak");
  } else if (signupPasswordInput.length > 5) {
    passwordStrength.innerHTML = "Medium";
    console.log("medium");
  } else if (signupPasswordInput.length > 7) {
    passwordStrength.innerHTML = "Strong";
    console.log("strong");
  }
}

signupPasswordInput.addEventListener("mouseleave", function () {
  // passwordStrength.innerHTML = console.log(passwordStrengthChecker());

  passwordStrengthChecker();
});

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
