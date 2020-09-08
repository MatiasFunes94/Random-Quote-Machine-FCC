export const GET_QUOTES = "GET_QUOTES";
export const ADD_QUOTE_FAVORITE = "ADD_QUOTE_FAVORITE";
export const ON_CLOSE = "ON_CLOSE";

export function randomQuote(data) {
    return { type: "GET_QUOTES", payload: data }
}

export function addFavorite(payload) {
    return { type: "ADD_QUOTE_FAVORITE", payload }
}

export function onClose(payload) {
    return { type: "ON_CLOSE", payload }
}