import { displayNotification } from "./popup_notifications_handler.js";

export function checkUserInput(form) {
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