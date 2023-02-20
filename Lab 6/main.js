function validatePassword() {
    let password = document.getElementById("password").value;
    let validatePassword = document.getElementById("validate-password").value;
    let message = document.getElementById("message");
    if (password != validatePassword) {
        message.innerHTML = "Passwords dont match";
        return false;
    }else{
        message.innerHTML = "Passwords match";
        return true;
    }
}