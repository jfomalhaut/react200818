const ADD_CART = 'ADD_CART';

// Actions
export const addCart = (item) => ({ type: ADD_CART, item });

//
const CartReducer = (state = [], { type, item }) => {
	switch (type) {
		case ADD_CART: {
			// return state.concat({...item, count: 1});
			const ids = state.map(child => child.id);
			if (ids.indexOf(item.id) === -1) {
				return state.concat({...item, count: 1});
			} else {
				// return state.map(child => child.id === item.id ? ({...child, count: child.count + 1}) : child);
				return state.map(child => {
					if (child.id === item.id) {
						return ({ ...child, count: child.count + 1});
					} else {
						return child;
					}
				});
			}

			// return ids.indexOf(item.id) === -1 ? state.concat(item) : state;

		}
		default: {
			return state;
		}
	}
};

export default CartReducer;