function validatePassword() {
    let password = document.getElementById("password").value;
    let validatePassword = document.getElementById("validate-password").value;
    let message = document.getElementById("message");
    if (password != validatePassword) {
        message.innerHTML = "Passwords dont match";
    } else if (password == validatePassword && password != "" && validatePassword != "") {
        message.innerHTML = "Passwords match";
    }
}

function passwordCheck() {
    let password = document.getElementById("password").value;
    let message = document.getElementById("message1");
    let upperCase = /[A-Z]/g;
    let lowerCase = /[a-z]/g;
    let numbers = /[0-9]/g;
    let special = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;

    if (password.match(upperCase) && password.match(lowerCase) && password.match(numbers) &&
        password.match(special) && password.length >= 8) {
        message.innerHTML = "";
    } else {
        message.innerHTML = "Invalid password";
    }
}

let font = document.getElementById("font");
font.onmousewheel = () => {
    const colores = [
        "text-primary",
        "text-secondary",
        "text-success",
        "text-danger",
        "text-warning",
        "text-info",
        "text-light",
        "text-dark"
    ]
    const index = Math.floor(Math.random() * colores.length);
    font.classList = [""];
    font.classList.add(colores[index]);
}

let password = document.getElementById("password");
let popup = document.getElementById("myPopup");
password.onmouseover = () => {
    popup.classList.toggle("show");
}

password.onmouseout = () => {
    popup.classList.toggle("show");
}