let menuIconEl = document.getElementById("menuIcon");
let closeIconEl = document.getElementById("closeIcon");
let menuContainerEl = document.getElementById("menuContainer");

let userData = {
  username: "",
  password: "",
};

let newUserData = {
  newUsername: "",
  newUserEmail: "",
  newUserPassword: "",
  newUserConfirmPassword: "",
};

let loginFormEl = document.getElementById("loginForm");
let registerFormEl = document.getElementById("registerForm");
let registerHereEl = document.getElementById("registerHere");
let loginHereEl = document.getElementById("loginHere");

//login page elements
let loginUsernameEl = document.getElementById("loginUsername");
let loginPasswordEl = document.getElementById("loginPassword");
let submitButtonEl = document.getElementById("submitButton");

let loginUsernameErrMsgEl = document.getElementById("loginUsernameErrMsg");
let loginPasswordErrMsgEl = document.getElementById("loginPasswordErrMsg");

//register page elements
let registerUsernameEl = document.getElementById("registerUsername");
let registerEmailEl = document.getElementById("registerEmail");
let registerPasswordEl = document.getElementById("registerPassword");
let confirmPasswordEl = document.getElementById("confirmPassword");
let registerButtonEl = document.getElementById("registerButton");

let newUsernameErrMsgEl = document.getElementById("newUsernameErrMsg");
let newUserEmailErrMsgEl = document.getElementById("newUserEmailErrMsg");
let newPasswordErrMsgEl = document.getElementById("newPasswordErrMsg");
let confirmPasswordErrMsgEl = document.getElementById("confirmPasswordErrMsg");

//menu icon function for small devices
menuIconEl.addEventListener("click", function () {
  menuIconEl.classList.toggle("hide");
  closeIconEl.classList.toggle("hide");
  menuContainerEl.classList.toggle("hide");
});
//close icon function for small devices
closeIconEl.addEventListener("click", function () {
  menuIconEl.classList.toggle("hide");
  closeIconEl.classList.toggle("hide");
  menuContainerEl.classList.toggle("hide");
});

//function to show register page
registerHereEl.addEventListener("click", function () {
  loginFormEl.classList.toggle("hide");
  registerFormEl.classList.toggle("hide");
  registerUsernameEl.value = "";
  registerEmailEl.value = "";
  registerPasswordEl.value = "";
  confirmPasswordEl.value = "";
  newUsernameErrMsgEl.textContent = "";
  newUserEmailErrMsgEl.textContent = "";
  newPasswordErrMsgEl.textContent = "";
  confirmPasswordErrMsgEl.textContent = "";
});
//function to show login page
loginHereEl.addEventListener("click", function () {
  loginFormEl.classList.toggle("hide");
  registerFormEl.classList.toggle("hide");
  loginUsernameEl.value = "";
  loginPasswordEl.value = "";
  loginUsernameErrMsgEl.textContent = "";
  loginPasswordErrMsgEl.textContent = "";
});

//blur event for login username
loginUsernameEl.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    loginUsernameErrMsgEl.textContent = "Required*";
  } else {
    loginUsernameErrMsgEl.textContent = "";
  }
  userData.username = event.target.value;
});

//blur event for login password
loginPasswordEl.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    loginPasswordErrMsgEl.textContent = "Required*";
  } else {
    loginPasswordErrMsgEl.textContent = "";
  }
  userData.password = event.target.value;
});

//blur event for register username
registerUsernameEl.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    newUsernameErrMsgEl.textContent = "Required*";
  } else {
    newUsernameErrMsgEl.textContent = "";
  }
  newUserData.newUsername = event.target.value;
});

//blur event for register email
registerEmailEl.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    newUserEmailErrMsgEl.textContent = "Required*";
  } else {
    newUserEmailErrMsgEl.textContent = "";
  }
  newUserData.newUserEmail = event.target.value;
});

//blur event for register password
registerPasswordEl.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    newPasswordErrMsgEl.textContent = "Required*";
  } else {
    newPasswordErrMsgEl.textContent = "";
  }
  newUserData.newUserPassword = event.target.value;
});

//blur event for register confirm password
confirmPasswordEl.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    confirmPasswordErrMsgEl.textContent = "Required*";
  } else {
    confirmPasswordErrMsgEl.textContent = "";
  }
  newUserData.newUserConfirmPassword = event.target.value;
});

function validateUserData(userData) {
  const { username, password } = userData;
  if (username === "") {
    loginUsernameErrMsgEl.textContent = "Required*";
  }
  if (password === "") {
    loginPasswordErrMsgEl.textContent = "Required*";
  }
}

function validateNewUserData(newUserData) {
  let {
    newUsername,
    newUserEmail,
    newUserPassword,
    newUserConfirmPassword,
  } = newUserData;

  if (newUsername === "") {
    newUsernameErrMsgEl.textContent = "Required*";
  }
  if (newUserEmail === "") {
    newUserEmailErrMsgEl.textContent = "Required*";
  }
  if (newUserPassword === "") {
    newUserPasswordEl.textContent = "Required*";
  }
  if (newUserConfirmPassword === "") {
    confirmPasswordErrMsgEl.textContent = "Required*";
  }
  if (newUserPassword !== newUserConfirmPassword) {
    confirmPasswordErrMsgEl.textContent = "Passwords must be same";
  }
}

//console.log(userData);
//console.log(newUserData);

loginFormEl.addEventListener("submit", function (event) {
  event.preventDefault();
  validateUserData(userData);
});

registerFormEl.addEventListener("submit", function (event) {
  event.preventDefault();
  validateNewUserData(newUserData);
});
