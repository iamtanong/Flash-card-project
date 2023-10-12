import { getCards, addCard, deleteCard } from "./api.js";

const cardContainer = document.getElementById("card-container");
const currentEl = document.getElementById("current");
let currentActiveCard = 0;
let cardsEl = []; // เก็บจำนวนคำถามทั้งหมด
let cardData = await getCardData();
const addContainer = document.getElementById("add-container");

function createCard() {
    cardData.forEach((data, index) => {
        createSingleCard(data, index);
    });
}

function createSingleCard(data, index) {
    const card = document.createElement("div");
    card.classList.add("card");

    if (index == 0) {
        card.classList.add("active");
    }
    card.innerHTML = `
    <div class="inner-card">
                <div class="inner-card-front">
                </div>
                <div class="inner-card-back">
                </div>
    </div>
    `;

    const frontCardText = document.createElement("p");
    frontCardText.innerText = data.question;
    card.querySelector(".inner-card-front").appendChild(frontCardText);

    const backCardText = document.createElement("p");
    backCardText.innerText = data.answer;
    card.querySelector(".inner-card-back").appendChild(backCardText);

    card.addEventListener("click", () => card.classList.toggle("show-answer"));
    cardsEl.push(card);
    cardContainer.appendChild(card);
    updateCurrentQuestion();
}

function updateCurrentQuestion() {
    currentEl.innerText = `${currentActiveCard + 1} / ${cardsEl.length}`;
}

async function getCardData() {
    const cards = await getCards();

    cards.forEach((data, index) => {
        createSingleCard(data, index);
    });

    return cards;
}

function nextBtnHandler() {
    cardsEl[currentActiveCard].className = "card left";
    currentActiveCard += 1;
    if (currentActiveCard > cardsEl.length - 1) {
        // จำนวน 4 , 0,1,2,3
        currentActiveCard = cardsEl.length - 1;
    }
    cardsEl[currentActiveCard].className = "card active";
    updateCurrentQuestion();
}

function prevBtnHandler() {
    cardsEl[currentActiveCard].className = "card right";
    currentActiveCard -= 1;
    if (currentActiveCard < 0) {
        // จำนวน 4 , 0,1,2,3
        currentActiveCard = 0;
    }
    cardsEl[currentActiveCard].className = "card active";
    updateCurrentQuestion();
}

async function addBtnHandler() {
    const questionEl = document.getElementById("question");
    const answerEl = document.getElementById("answer");

    const question = questionEl.value;
    const answer = answerEl.value;
    if (question.trim() && answer.trim()) {
        const newCard = { question, answer };
        createSingleCard(newCard);
        questionEl.value = "";
        answerEl.value = "";
        addContainer.classList.remove("show");

        const id = await addCard({ name: answer, ...newCard });
        cardData.push({ _id: id, name: answer, ...newCard })
        console.log(cardData)
    }

    cardsEl[currentActiveCard].className = "card left";
    currentActiveCard = cardsEl.length - 1;
    cardsEl[currentActiveCard].className = "card active";
    updateCurrentQuestion();

}

async function clrBtnHandler() {
    const id = cardData[currentActiveCard]["_id"];
    await deleteCard(id);

    cardsEl[currentActiveCard].className = "card right";

    cardContainer.removeChild(cardContainer.children[currentActiveCard]);
    cardData.splice(currentActiveCard, 1);
    cardsEl.splice(currentActiveCard, 1);

    currentActiveCard -= 1;
    cardsEl[currentActiveCard].className = "card active";
    updateCurrentQuestion();
}

export { createCard, createSingleCard, updateCurrentQuestion }
export { nextBtnHandler, prevBtnHandler, addBtnHandler, clrBtnHandler }