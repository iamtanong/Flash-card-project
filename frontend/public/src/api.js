import { BACKEND_URL } from "./config.js";

/** @typedef {import("./config.js").Card} Card */
/** @typedef {import("./config.js").CardPayload} CardPayload */
export async function getCards() {
    /** @type {Item[]} */
    const cards = await fetch(`${BACKEND_URL}/cards`).then(res => res.json());

    return cards;
}

/** @param {CardPayload} card */
export async function addCard(card) {
    const newCard = await fetch(`${BACKEND_URL}/cards`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(card)
    }).then((res) => {
        return res.json();
    })

    return newCard.id;
}

/**
 * @param {"_id"} id 
 * @param {CardPayload} card 
 */
export async function editCard(id, card) {
    await fetch(`${BACKEND_URL}/cards/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(card)
    })
}

/** @param {"_id"} id */
export async function deleteCard(id) {
    await fetch(`${BACKEND_URL}/cards/${id}`, {
        method: "DELETE"
    })
}
