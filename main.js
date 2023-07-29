let OPENING_PASSWORD = "From death be birthed anew";

function checkOpeningPassword() {
    let passwordInput = document.getElementById("opening_password_input");
    let scythe_image = document.getElementById("scythe");

    // Check if inputted password matches.
    if (passwordInput.value.toLowerCase() === OPENING_PASSWORD.toLowerCase()) {
        passwordInput.setAttribute("disabled", "");

        setTimeout(() => {
            loadingAnimation();
        }, 300);

        setTimeout(() => {
            open("book.html", "_self");
        }, 2500);
    }
}

function loadingAnimation() {
    let passwordInput = document.getElementById("opening_password_input");
    let scythe_image = document.getElementById("scythe");

    passwordInput.style.visibility = "hidden";
    document.getElementById("riddle").style.visibility = "hidden";

    scythe_image.style.visibility = "visible";

    for (let rotation = 0; rotation < 360; rotation++) {
        setTimeout(() => {
            scythe_image.style.transform = `rotate(${-rotation}deg)`
        }, rotation * 6);
    }
}