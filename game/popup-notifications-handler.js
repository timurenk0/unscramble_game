const notificationTextEl = document.getElementById("notification-text");
const popupNotificationWrapperEl = document.getElementById("popup-notification-wrapper");

export function displayNotification(messageText, messageColor) {
    popupNotificationWrapperEl.classList.add("visible");
    notificationTextEl.textContent = messageText;
    notificationTextEl.style.color = messageColor;

    setTimeout(() => {
        popupNotificationWrapperEl.classList.remove("visible");
    }, 2000);
}

