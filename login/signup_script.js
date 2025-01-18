import { displayNotification } from "../popup-notifications-handler.js";

const form = document.getElementById("submission-form");
const submitButton = document.getElementById("submit");
const togglePasswordButtons = document.querySelectorAll(".toggle-password");


togglePasswordButtons.forEach(button => {
    button.addEventListener("click", () => {
        const input = button.previousElementSibling;

        if (input.type === "password") {
            input.type = "text";
            button.textContent = "hide";
        } else {
            input.type = "password";
            button.textContent = "show";
        }
    })
})


function checkUserInput() {
    const formData = new FormData(form);

    for (const [key, value] of formData.entries()) {
        if (!value.trim()) {
            displayNotification(`${key} field cannot be empty`, "rgb(255, 0, 0)");
            return false;
        }
    }

    if (formData.get("password").length < 4) {
        displayNotification("Password cannot be shorter than 4 characters!", "rgb(255, 0, 0)");
        return false;
    } else if (formData.get("password") !== formData.get("repeat-password")) {
        displayNotification("Password must match!", "rgb(255, 0, 0)");
        return false;
    }

    displayNotification("Form submitted successfully!", "rgb(19, 167, 0)")
    return true;
}

submitButton.addEventListener("click", (event) => {
    checkUserInput();
    if (checkUserInput()) {
        console.log("Form submitted successfully.");
    } else {
        event.preventDefault();
    }
})