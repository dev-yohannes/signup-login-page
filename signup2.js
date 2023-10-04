const signupUsernameInput = document.querySelector("#signup-username-input");
const signupPasswordInput = document.querySelector("#signup-password-input");
const signupSignupButton = document.querySelector("#signup-signup-button");
const signupClearButton = document.querySelector("#signup-clear-button");
const passwordStrength = document.querySelector("#password-strength");
const showPasswordIcon = document.querySelector("#show-password");
const hidePasswordIcon = document.querySelector("#hide-password");

hidePasswordIcon.style.display = "none";

//
const checkInput = () => {
  if (signupUsernameInput.value === "" || signupPasswordInput.value === "") {
    alert("You need to fill the inputs.");
  } else {
    window.location.href = "login.html";
    localStorage.setItem("savedUsername", signupUsernameInput.value);
    localStorage.setItem("savedPassword", signupPasswordInput.value);
  }
};

const checkPasswordStrength = () => {
  if (signupPasswordInput.value.length <= 3) {
    passwordStrength.innerHTML = "Weak";
    passwordStrength.style.color = "red";
  } else if (signupPasswordInput.value.length <= 5) {
    passwordStrength.innerHTML = "Medium";
    passwordStrength.style.color = "yellow";
  } else if (signupPasswordInput.value.length >= 7) {
    passwordStrength.innerHTML = "Strong";
    passwordStrength.style.color = "green";
    checkInput();
  }
};

showPasswordIcon.addEventListener("click", () => {
  hidePasswordIcon.style.display = "block";
  showPasswordIcon.style.display = "none";
  signupPasswordInput.type = "text";
});

hidePasswordIcon.addEventListener("click", () => {
  hidePasswordIcon.style.display = "none";
  showPasswordIcon.style.display = "block";
  signupPasswordInput.type = "password";
});

signupSignupButton.addEventListener("click", () => {
  checkInput();
  checkPasswordStrength();
});

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    checkInput();
    checkPasswordStrength();
  }
});
