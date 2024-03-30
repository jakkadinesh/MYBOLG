function validateForm() {
    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let password = document.getElementById("password");
    let cpassword = document.getElementById("cpassword");
  
    if (fname.value == "") {
      alert("First name must be filled out");
      fname.focus();
      return false;
    }
  
    if (lname.value == "") {
      alert("Last name must be filled out");
      lname.focus();
      return false;
    }
  
    if (email.value == "") {
      alert("Email must be filled out");
      email.focus();
      return false;
    }
  
    if (phone.value == "") {
      alert("Phone number must be filled out");
      phone.focus();
      return false;
    }
  
    if (password.value == "") {
      alert("Password must be filled out");
      password.focus();
      return false;
    }
  
    if (cpassword.value == "") {
      alert("Confirm Password must be filled out");
      cpassword.focus();
      return false;
    }
  
    if (password.value != cpassword.value) {
      alert("Passwords do not match");
      password.focus();
      return false;
    }
  
    return true;
  }