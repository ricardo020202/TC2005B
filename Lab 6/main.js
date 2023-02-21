function validatePassword() {
    let password = document.getElementById("password").value;
    let validatePassword = document.getElementById("validate-password").value;
    let message = document.getElementById("message");
    if (password != validatePassword) {
        message.innerHTML = "Passwords dont match";
        return false;
    } else if (password == validatePassword && password != "" && validatePassword != "") {
        message.innerHTML = "Passwords match";
        return true;
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
    font.classList = ["d-flex justify-content-center align-items-center"];
    font.classList.add(colores[index]);
}