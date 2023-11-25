// --------------------------- validation for login form -------------------------------------
function ValidateLoginForm() {
  RemoveAllErrorMessage();

  var LoginEmail = document.getElementById("LoginEmail").value;
  var LoginPassword = document.getElementById("LoginPassword").value;
  var PasswordValidationMessage;
  var emailValidationMessage;

  //for email validation
  emailValidationMessage = isValidEmail(LoginEmail);
  if (emailValidationMessage != "valid") {
    ShowErrorMessage("LoginEmail", emailValidationMessage);
    return false;
  }

  //for password validation
  PasswordValidationMessage = isValidPassword(LoginPassword);
  if (PasswordValidationMessage != "valid") {
    ShowErrorMessage("LoginPassword", PasswordValidationMessage);
    return false;
  }

  return true;
}

//----------------------- validation for signUp form-----------------------------------------
function ValidateSignUpForm() {
  RemoveAllErrorMessage();

  var RegiName = document.getElementById("RegiName").value;
  var RegiEmailAddres = document.getElementById("RegiEmailAddres").value;
  var RegiPassword = document.getElementById("RegiPassword").value;
  var RegiConfirmPassword = document.getElementById("RegiConfirmPassword").value;

  var PasswordValidationMessage;
  var ConfirmPasswordMessage;
  var emailValidationMessage;

  let minimum = 3;
  let maximum = 20;

  if (RegiName == "") {
    ShowErrorMessage("RegiName", "Please fill the filed.");
    return false;
  } else if (RegiName.length < minimum || RegiName.length > maximum) {
    ShowErrorMessage(
      "RegiName",
      `Name should be minimum ${minimum} and maximum ${maximum} characters long.`
    );
    return false;
  }

  //for email validation
  emailValidationMessage = isValidEmail(RegiEmailAddres);
  if (emailValidationMessage != "valid") {
    ShowErrorMessage("RegiEmailAddres", emailValidationMessage);
    return false;
  }

  //for password validation
  PasswordValidationMessage = isValidPassword(RegiPassword);
  if (PasswordValidationMessage != "valid") {
    ShowErrorMessage("RegiPassword", PasswordValidationMessage);
    return false;
  }

  //for confirm password validation
  ConfirmPasswordMessage = isValidPassword(RegiConfirmPassword);
  if (ConfirmPasswordMessage != "valid") {
    ShowErrorMessage("RegiConfirmPassword", ConfirmPasswordMessage);
    return false;
  }

  //to check password = confirm password
  if (RegiPassword != RegiConfirmPassword) {
    ShowErrorMessage("RegiConfirmPassword", "Password not match.");
    return false;
  }
  return true;
}

//---------------------- validation for forgot password ---------------------------------
function ValidateForgotPasswordForm() {
  RemoveAllErrorMessage();

  var forgotPassEmail = document.getElementById("forgotPassEmail").value;

  var emailValidationMessage;
  emailValidationMessage = isValidEmail(forgotPassEmail);
  if (emailValidationMessage != "valid") {
    ShowErrorMessage("forgotPassEmail", emailValidationMessage);
    return false;
  }
}

//---------------------- validation for password reset --------------------------------
function ValidateResetPasswordForm() {
  RemoveAllErrorMessage();

  var NewPassword = document.getElementById("NewPassword").value;
  var ConfirmNewPassword = document.getElementById("ConfirmNewPassword").value;

  var PasswordValidationMessage;
  var ConfirmPasswordMessage;

  //for password validation
  PasswordValidationMessage = isValidPassword(NewPassword);
  if (PasswordValidationMessage != "valid") {
    ShowErrorMessage("NewPassword", PasswordValidationMessage);
    return false;
  }

  //for confirm password validation
  ConfirmPasswordMessage = isValidPassword(ConfirmNewPassword);
  if (ConfirmPasswordMessage != "valid") {
    ShowErrorMessage("ConfirmNewPassword", ConfirmPasswordMessage);
    return false;
  }

  //to check password = confirm password
  if (NewPassword != ConfirmNewPassword) {
    ShowErrorMessage("ConfirmNewPassword", "Password not match.");
    return false;
  }

  return true;
}

//----------------------- fun. for remove all error messages --------------------------------------
function RemoveAllErrorMessage() {
  var allErrorMessage = document.getElementsByClassName("error-message");
  var allErrorFiled = document.getElementsByClassName("error-input");
  var i;

  for (i = allErrorMessage.length - 1; i >= 0; i--) {
    allErrorMessage[i].remove();
  }

  for (i = allErrorFiled.length - 1; i >= 0; i--) {
    allErrorFiled[i].classList.remove("error-input");
  }
}

//----------------------- fun. for show error message --------------------------------------
function ShowErrorMessage(InputBoxID, Message) {
  var InputBox = document.getElementById(InputBoxID);
  InputBox.classList.add("error-input");
  InputBox.focus();

  var ErrorMessageElement = document.createElement("p");
  ErrorMessageElement.innerHTML = Message;
  ErrorMessageElement.classList.add("error-message");
  ErrorMessageElement.setAttribute("id", InputBoxID + "-error");

  InputBox.parentNode.insertBefore(ErrorMessageElement, InputBox.nextSibling);
}

//------------------------ fun. to valid email ----------------------------------------
function isValidEmail(email) {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email == "") {
    return "Please fill the field.";
  }

  if (emailRegex.test(email) == false) {
    return "This is not a valid email.";
  }

  return "valid";
}

//--------------------------- fun. to vaild password -------------------------------------
function isValidPassword(password) {
  const minLength = 8;
  const maxLength = 32;
  const letterNumberRegexSpecialChar =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;

  if (password == "") {
    return "Please fill the field.";
  }

  if (password.length < minLength || password.length > maxLength) {
    return `Password length should be minimum ${minLength} & maximum ${maxLength} characters.`;
  }

  if (!letterNumberRegexSpecialChar.test(password)) {
    return "Password should contain alphabetic, numeric and special characters.";
  }
  return "valid";
}
