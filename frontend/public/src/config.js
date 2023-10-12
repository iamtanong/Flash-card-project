export const BACKEND_URL = "http://localhost:3222"; // public ip of EC2

/** 
    * @typedef {object} Card 
    * @property {string} name
    * @property {string} question
    * @property {string} answer
*/

/** @typedef {Omit<Card, "_id">} CardPayload */