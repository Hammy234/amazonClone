export const initialState = {
    basket: [],
    user: null,
    notification: undefined,
    items: [],
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_ITEMS': 
            return {
                ...state,
                items: action.items
            }
        case 'ADD_TO_BASKET':
            return { 
                ...state, basket: [...state.basket, action.item],
            };

        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: []
            }

        case "REMOVE_FROM_BASKET":
            const item = state.basket.find(item => item.id === action.id);
            return {
                 ...state,
                 basket: state.basket.filter( basketItem => basketItem !== item)
             }

        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }

        case "SHOW_NOTIFICATION":
            return {
                ...state,
                notification: action.notification
            }

        case "HIDE_NOTIFICATION":
            return {
                ...state,
                notification: undefined
            }
        
        default: return state;
    };
};

export default reducer