import { checkUserInput } from "./user_input_handler.js";

const form = document.getElementById("submission-form");
const submitButton = document.getElementById("submit");
const togglePasswordButton = document.querySelector(".toggle-password");

form.addEventListener("submit", (event) => {
    event.preventDefault();
})

togglePasswordButton.addEventListener("click", () => {
    const input = togglePasswordButton.previousElementSibling;
    if (input.type === "password") {
        input.type = "text";
        togglePasswordButton.textContent = "hide";
    } else {
        input.type = "password";
        togglePasswordButton.textContent = "show";
    }
})

submitButton.addEventListener("click", (event) => {
    checkUserInput(form);
    if (checkUserInput(form)) {
        console.log("Form submitted successfully");
    } else {
        event.preventDefault();
    }
})
