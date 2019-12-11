
function passValidator() {
  var password = document.elementId("password").value;

  if (password == '') {
    alert("Empty password.");

    return false;
  }

  else if (password.length < 8 {
    alert("Please enter a valid password.")

    return false;
  }

  else if (password.length > 24) {
    alert("Please enter a valid password. ")

    return false;
  }

  else if (!char(password.(0))){
    alert("Please enter a valid password.")

    return false;
  }

  return true;
}
function myFunction() {
  var x = document.elementId("Input");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function formValidator() {
  if (!emailValidator()) {
    return false;
  }

  if (!userValidator()) {
    return false;
  }

  if (!passValidator()) {
    return false;
  }

  return true;
}
