import { createCard, nextBtnHandler, prevBtnHandler, addBtnHandler, clrBtnHandler } from "./card.js";

// javascript for mainpage
const showBtn = document.getElementById("show");
const hiddenBtn = document.getElementById("btn-hidden");
const addContainer = document.getElementById("add-container");

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const clearBtn = document.getElementById("clear");

const addCard = document.getElementById("add-card");

document.addEventListener("DOMContentLoaded", createCard);

// card.addEventListener('click',()=>card.classList.toggle("show-answer"));
showBtn.addEventListener("click", () => { addContainer.classList.add("show") });
hiddenBtn.addEventListener("click", () => { addContainer.classList.remove("show") });

nextBtn.addEventListener("click", nextBtnHandler);
prevBtn.addEventListener("click", prevBtnHandler);
addCard.addEventListener("click", addBtnHandler);
clearBtn.addEventListener("click", clrBtnHandler);

// js for sound effects
const backgroundMusic = document.getElementById("background-music");
const toggleSoundButton = document.getElementById("toggle-sound");
const soundOnImage = document.getElementById("sound-on-img");
const soundOffImage = document.getElementById("sound-off-img");

// Initialize a variable to track the sound state
let isSoundOn = true;

// Function to toggle sound on and off
function toggleSound() {
    if (isSoundOn) {
        backgroundMusic.play();
        soundOnImage.style.display = "none";
        soundOffImage.style.display = "inline";
    } else {
        backgroundMusic.pause();
        soundOnImage.style.display = "inline";
        soundOffImage.style.display = "none";
    }
    isSoundOn = !isSoundOn;
}

// Add a click event listener to the button
toggleSoundButton.addEventListener("click", toggleSound);

// Initialize the button state and images
if (isSoundOn) {
    soundOnImage.style.display = "inline";
    soundOffImage.style.display = "none";
} else {
    soundOnImage.style.display = "none";
    soundOffImage.style.display = "inline";
}

// JavaScript to handle the popup functionality
const openPopupButton1 = document.getElementById("openPopup2");
const closePopupButton1 = document.getElementById("closePopup2");
const popupContainer = document.getElementById("popupContainer");

openPopupButton1.addEventListener("click", () => {
    popupContainer.style.display = "flex";
});

closePopupButton1.addEventListener("click", () => {
    popupContainer.style.display = "none";
});
