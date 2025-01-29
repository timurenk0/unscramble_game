import { checkUserInput } from "./user_input_handler.js";

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

submitButton.addEventListener("click", (event) => {
    checkUserInput(form);
    if (checkUserInput(form)) {
        console.log("Form submitted successfully.");
    } else {
        event.preventDefault();
    }
})