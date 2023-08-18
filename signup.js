const signupUsernameInput = document.querySelector("#signup-username-input");
const signupPasswordInput = document.querySelector("#signup-password-input");
let signupSignupButton = document.querySelector("#signup-signup-button");
let signupClearButton = document.querySelector("#signup-clear-button");
let passwordStrength = document.querySelector("#password-strength");
let viewIcon = document.querySelector("#view-icon");

// function

function passwordStrengthChecker() {
  if (signupPasswordInput.value.length <= 3) {
    passwordStrength.innerHTML = "Weak";
    passwordStrength.style.color = "red";
    // signupSignupButton.disabled = true;
  } else if (signupPasswordInput.value.length <= 5) {
    passwordStrength.innerHTML = "Medium";
    passwordStrength.style.color = "yellow";
    // signupSignupButton.disabled = true;
  } else if (signupPasswordInput.value.length >= 7) {
    passwordStrength.innerHTML = "Strong";
    passwordStrength.style.color = "green";
    signupConditional();

    // signupSignupButton.disabled = false;
  }
}

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
  passwordStrengthChecker();
});

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    passwordStrengthChecker();
  }
});

signupClearButton.addEventListener("click", function (e) {
  e.preventDefault();

  signupUsernameInput.value = "";
  signupPasswordInput.value = "";
});

viewIcon.addEventListener("click", function (e) {
  e.preventDefault();

  signupPasswordInput.type = "text";
});
