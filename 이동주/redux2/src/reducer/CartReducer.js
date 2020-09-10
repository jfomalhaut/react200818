// const initialValue =  {
//     cart: []
// };

const CartReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CART': {
            return state.concat(action.item);
        }
        default : {
            return state;
        }
    }
};

export default CartReducer;