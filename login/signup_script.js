const form = document.getElementById("submission-form");
const submitButton = document.getElementById("submit");
const togglePasswordButtons = document.querySelectorAll(".toggle-password");
const passwordsMatchTextEl = document.getElementById("password-match");


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
            alert(`${key} cannot be empty`);
            return ;
        }
    }

    if (formData.get("password").length < 4) {
        alert("Password cannot be shorter than 4 characters!");
        return ;
    } else if (formData.get("password") !== formData.get("repeat-password")) {
        alert("Password must match!");
        return ;
    }

    alert("Form submitted successfully!")
    console.log(formData.get("username"));
}

submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    checkUserInput();
})