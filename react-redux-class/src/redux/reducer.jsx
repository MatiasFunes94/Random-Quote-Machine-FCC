import { GET_QUOTES, ADD_QUOTE_FAVORITE, ON_CLOSE } from '../redux/actions'

const initialState = {
    quote: "",
    author: "",
    id: 0,
    favorites: [],
}

export default function Reducer(state = initialState, action) {
    switch (action.type) {
        case GET_QUOTES:
            return {
                ...state,
                quote: action.payload.quote,
                author: action.payload.author,
                id: action.payload.id
            }
        break;
        case ADD_QUOTE_FAVORITE:
            if(!state.favorites.some(element => element.id === state.id)){
                return {
                    ...state,
                    favorites: [...state.favorites.concat([{author: state.author, quote: state.quote, id: state.id}])]
                }    
            }
            else {
                alert("Quote has already been added!");
                return {...state}
            }
        break;
        case ON_CLOSE:
            return {
                ...state,
                favorites: state.favorites.filter(element => element.id !== action.payload)
            }
        break;
        default:
            return {...state};
    }   
};

