
const ADD_TO_CART = 'cart/ADD_TO_CART';
const REMOVE_FROM_CART = 'cart/REMOVE_FROM_CART'
const INCREMENT = 'cart/INCREMENT'

export default function cartReducer(state = {}, action) {
    Object.freeze(state);
    const nextState = {...state};
    
    switch (action.type) {
       
        case ADD_TO_CART:
            nextState[action.cartItem.id] = action.cartItem;
            return nextState;
        case REMOVE_FROM_CART:
            let id = action.cartItem.id
            console.log('nextState', typeof(id))
            delete nextState[id];
            return nextState;
        case INCREMENT:
            let newId = action.cartItem.id
            nextState.newId["count"] === undefined ?
            nextState.newId["count"] = 1 : nextState.id["count"] += 1;

        default:
            return state;

    }
}

// action creator
export function addToCart(cartItem) {

    return {
       type: ADD_TO_CART,
       cartItem
    }

}
export function removeFromCart(cartItem) {

    return {
       type: REMOVE_FROM_CART,
       cartItem
    }

}

export function incrementCart(cartItem) {

    return {
       type: INCREMENT,
       cartItem: cartItem,
    //    count: count
    }

}