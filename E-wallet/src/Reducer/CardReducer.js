
const initialState = {
   myCards: [
     {id: 1, vendorId: 1, name: 'Adriana Johansson', number: '1234 1234 1234 1234', validDate: '12/23', ccv: 123 },
     {id: 2, vendorId: 2, name: 'Adriana Johansson', number: '1234 1231 3453 6564', validDate: '12/24', ccv: 121},
     {id: 3, vendorId: 3, name: 'Adriana Johansson', number: '1234 1231 3453 6564', validDate: '12/24', ccv: 323},
     {id: 4, vendorId: 4, name: 'Adriana Johansson', number: '1234 1231 3453 6564', validDate: '12/24', ccv: 543}
   ],
   activeCardId: 1,
};

const CardReducer = (state = initialState, action) => {
    switch(action.type) {
       case 'ADD_CARD':
         return {...state, myCards : [...state.myCards, action.payload]}
            // state.myCards = [...state.myCards, action.payload];
            // return state;
       case 'SET_ACTIVE_CARD': 
            return {...state, activeCardId: action.payload }
       case 'REMOVE_CARD':
         return {
               //   myCards.filter(card => {
               //      card.
               //   }), 
               //   addCard: addCard.payload
          }
       default:
            return state;
    }
}

export default CardReducer