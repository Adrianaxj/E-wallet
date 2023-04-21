export function addCard(card) {
    return {
        type: 'ADD_CARD',
        payload: card,
    }
}

export function setActiveCard(id) {
    return {
        type: 'SET_ACTIVE_CARD',
        payload: id,
    }
}