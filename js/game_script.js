import { displayNotification, displayAddedScore } from "./popup_notifications_handler.js";
import { isTimeOut, updateTimer } from "./game_timer_handler.js";

const scrambledWordTextEl = document.getElementById("scrambled-word");
const userInputEl = document.getElementById("user-input");
const scoreTextEl = document.getElementById("score");
const authorNameTextEl = document.getElementById("author-name");
const maxScoreTextEl = document.getElementById("max-score");

const authorName = "timurenk0";
authorNameTextEl.textContent = authorName;

const words = [
    "apple", "brave", "chair", "dance", "eagle", "faith", "giant", "house", "input", "jolly",
    "kitten", "laptop", "magic", "noble", "ocean", "pencil", "quilt", "robot", "sunny", "tiger",
    "unite", "vivid", "whale", "youth", "zebra", "angle", "brisk", "craft", "dream", "early",
    "frost", "grape", "heart", "image", "joint", "kneel", "level", "mount", "night", "opera",
    "proud", "quiet", "ridge", "skill", "tower", "urban", "vocal", "witty", "yacht", "bloom",
    "climb", "drift", "ember", "flora", "globe", "hover", "ivory", "jewel", "koala", "laser",
    "mimic", "nurse", "orbit", "pearl", "quark", "rumor", "shore", "toast", "ultra", "valve",
    "waver", "xenon", "zesty", "ample", "brick", "candy", "doubt", "elite", "fancy", "gloom",
    "hasty", "irony", "joker", "kiosk", "limit", "moral", "nerve", "olive", "prime", "quilt",
    "realm", "solid", "tense", "unity", "vigor", "world", "yield"
];

let scrambledWordIndex;
let score = 0;
maxScoreTextEl.textContent = score;

updateGame();


function scrambleWord(word) {
    if (typeof word !== "string") {
        throw new Error("Invalid input type");
    }

    if (word.length <= 1) {
        return word;
    }

    let charArray = word.split("");

    for (let i = charArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i - 1));

        [charArray[i], charArray[j]] = [charArray[j], charArray[i]];
    }

    return charArray.join("");
}

function updateGame() {

    userInputEl.value = "";

    let randomIndex = Math.floor(Math.random() * (words.length - 1));
    scrambledWordIndex = randomIndex;
    scrambledWordTextEl.textContent = scrambleWord(words[randomIndex]);
    scoreTextEl.textContent = score;
}

function checkUserInput() {
    let userInput = userInputEl.value.trim();


    if (userInput === "") {
        displayNotification("Input cannot be empty!", "rgba(0, 0, 0, 0.5)");
        return;
    }
    if (userInput === words[scrambledWordIndex]) {
        score += 1;
        updateGame();
        displayAddedScore();
        displayNotification("Good job!", "rgb(19, 167, 0)");
    } else {
        userInputEl.value = "";
        displayNotification("Bad luck! Try again.", "rgb(255, 0, 0)");
    }
}

let timerFlag = true;


userInputEl.addEventListener("keydown", (event) => {
    if (timerFlag) {
        updateTimer();
        timerFlag = false;
    }
    if (event.key === "Enter") {
        checkUserInput();
    }
    if (isTimeOut) {
        userInputEl.disabled = true;
        maxScoreTextEl.textContent = score;
    }
})