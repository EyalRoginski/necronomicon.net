let OPENING_PASSWORD = "Lorem Ipsum";

function checkOpeningPassword() {
    let passwordInput = document.getElementById("opening_password_input");
    let scythe_image = document.getElementById("scythe");

    // Check if inputted password matches.
    if (passwordInput.value.toLowerCase() === OPENING_PASSWORD.toLowerCase()) {
        passwordInput.setAttribute("disabled", "");
        passwordInput.style.visibility = "hidden";
        document.getElementById("riddle").style.visibility = "hidden";

        // Show scythe.
        scythe_image.style.visibility = "visible";

        // Rotate scythe.
        for (let rotation = 0; rotation < 360; rotation++) {
            setTimeout(() => {
                scythe_image.style.transform = `rotate(${-rotation}deg)`
            }, rotation * 6);
        }

        setTimeout(() => {
            open("book.html", "_self");
        }, 2500);

    }
}