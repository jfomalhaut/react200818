// const initialValue = {
// 	cart: []
// };


const CartReducer = (state = [], action) => {

	switch (action.type) {
		case 'ADD_CART': {
			return state.concat(action.item);
		}

		case 'SEL_CART': {
			const selected = action.list.filter(item => item.check === true);
			return state.concat(selected);
		}

		default :  {
			return state;
		}
	}
};


export default CartReducer;