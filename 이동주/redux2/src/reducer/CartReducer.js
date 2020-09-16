// const initialValue =  {
//     cart: []
// };
const ADD_CART = 'ADD_CART';
const REMOVE = 'REMOVE';
const CHECK_ALL = 'CHECK_ALL';
const REMOVE_ALL = 'REMOVE_ALL';


export const addCart = (item) => ({ type: ADD_CART, item });
export const remove = (id) => ({ type: REMOVE, id});
export const checkAll = () => ({ type: CHECK_ALL});
export const removeAll = () => ({ type: REMOVE_ALL});


const CartReducer = (state = [], {type, id, item}) => {
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
        //     const ids = state.map(item => item.id);
        //     // if(ids.indexOf(item.id) === -1){
        //     //     return state.concat(item);
        //     // } else {
        //     //     return state;
        //     // }
        //    return ids.indexOf(item.id) === -1 ? state.concat(item) : state;
            }
        }

        case REMOVE: {
            return state.filter(item => id !== item.id);
        }

        case CHECK_ALL: {
            const check = state.some(item => !item.check);
            return state.map(item => ({...item, check }));
        }
        
        case REMOVE_ALL: {
            return [];
        }
        default : {
            return state;
        }
    }
};

export default CartReducer;