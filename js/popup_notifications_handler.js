const notificationTextEl = document.getElementById("notification-text");
const popupNotificationWrapperEl = document.getElementById("popup-notification-wrapper");
const addedScoreTextEl = document.getElementById("added-score");

export function displayNotification(messageText, messageColor) {
    popupNotificationWrapperEl.classList.add("visible");
    notificationTextEl.textContent = messageText;
    notificationTextEl.style.color = messageColor;

    setTimeout(() => {
        popupNotificationWrapperEl.classList.remove("visible");
    }, 2000);
}

export function displayAddedScore() {
    addedScoreTextEl.classList.add("visible");

    setTimeout(() => {
        addedScoreTextEl.classList.remove("visible");
    }, 500)
}