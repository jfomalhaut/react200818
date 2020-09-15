const ADD_CART = 'ADD_CART';
const DEL_CART = 'DEL_CART';

// Action
export const addCart = (item) => ({ type: ADD_CART, item });
export const delCart = (id) => ({ type: DEL_CART, id });

// Reducer
const CartReducer = (state = [], action) => {

	switch (action.type) {
		case 'ADD_CART': {
			const ids = state.map(item => item.id);
			return ids.indexOf(action.item.id) === -1 ? state.concat(action.item) : state;
			// return state.concat(action.item);
		}

		case 'SEL_CART': {
			const selected = action.list.filter(item => item.check === true);
			return state.concat(selected);
		}

		case 'DEL_CART': {
			return state.filter(item => item.id !== action.id);
		}

		default :  {
			return state;
		}
	}
};


export default CartReducer;