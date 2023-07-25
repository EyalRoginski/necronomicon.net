let OPENING_PASSWORD = "Lorem Ipsum";

function checkOpeningPassword() {
    let passwordInput = document.getElementById("opening_password_input");
    if (passwordInput.value.toLowerCase() === OPENING_PASSWORD.toLowerCase()) {
        open("book.html", "_self");
    }
}