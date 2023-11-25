// ---------------------------- Login form ------------------------------------
function ShowLoginForm() {
  SetTitle("Login");

  ShowHideForm("LoginFrom", "Show");
  ShowHideForm("SignUpFrom", "Hide");
  ShowHideForm("ForgotPasswordForm", "Hide");
}
// ---------------------------- SignUp form --------------------------------
function ShowSignUpForm() {
  SetTitle("SignUp");

  ShowHideForm("SignUpFrom", "Show");
  ShowHideForm("LoginFrom", "Hide");
  ShowHideForm("ForgotPasswordForm", "Hide");
}
// ------------------------------ ForgotPassword form ---------------------------
function ShowForgotPasswordForm() {
  SetTitle("Forgot Password");

  ShowHideForm("SignUpFrom", "Hide");
  ShowHideForm("LoginFrom", "Hide");
  ShowHideForm("ForgotPasswordForm", "Show");
}
//--------------------------------------------------------------------------------
function SetTitle(Title) {
  var formTitle = document.getElementById("formTitle");
  formTitle.innerHTML = Title;
}
// -------------------------------------------------------------------------------
function ShowHideForm(FormID, ShowOrHide) {
  var Form = document.getElementById(FormID);

  if (ShowOrHide == "Show") {
    Form.style.display = "block";
  } else {
    Form.style.display = "none";
  }
}
//----------------------------------------------------------------------------------
var SignUpitBtn = document.getElementById("SignUpitBtn");
var SubmitBtn = document.getElementById("LoginBtn");
var LoginEmail = document.getElementById("LoginEmail").value;
var LoginPassword = document.getElementById("LoginPassword").value;
var ForgotPassword = document.getElementById("ForgotPassword").value;
var RegiName = document.getElementById("RegiName").value;
var RegiEmailAddres = document.getElementById("RegiEmailAddres").value;
var RegiPassword = document.getElementById("RegiPassword").value;
var RegiConfirmPassword = document.getElementById("RegiConfirmPassword").value;

SignUpitBtn.addEventListener("click", function() {
  localStorage.setItem("name", JSON.stringify(RegiName));
  localStorage.setItem("email", JSON.stringify(RegiEmailAddres));
  localStorage.setItem("password", JSON.stringify(RegiPassword));
  ShowLoginForm();
});

SubmitBtn.addEventListener("click", function() {
  localStorage.setItem("email", JSON.stringify(LoginEmail));
  localStorage.setItem("password", JSON.stringify(LoginPassword));

//   if (localStorage.getItem("email") && localStorage.getItem("password")) {
// console.log(localStorage.getItem("email") + " " + localStorage.getItem("password"));
//   }
});

// ForgotPassword.addEventListener("click", function() {
//   localStorage.removeItem("password");
// })